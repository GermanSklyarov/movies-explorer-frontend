import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter, useHistory, Redirect } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from "../SavedMovies/SavedMovies"
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('jwt')));
  const [cards, setCards] = useState([]);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(localStorage.getItem("isCheckboxChecked") ? JSON.parse(localStorage.getItem("isCheckboxChecked")) : false);
  const [isSavedCheckboxChecked, setIsSavedCheckboxChecked] = useState(false);
  const [isAllCardsRendered, setIsAllCardsRendered] = useState(false);
  const [foundCards, setFoundCards] = useState(localStorage.getItem("foundCards") ? JSON.parse(localStorage.getItem("foundCards")) : []);
  const [renderedCards, setRenderedCards] = useState(renderCards(localStorage.getItem("foundCards") ? JSON.parse(localStorage.getItem("foundCards")) : []));
  const [savedCards, setSavedCards] = useState([]);
  const [foundSavedCards, setFoundSavedCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [registerError, setRegisterError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [updateError, setUpdateError] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    Promise.all([moviesApi.getMovies(), mainApi.getSavedCards()])
      .then(([cards, savedCards]) => {
        setCards(cards);
        setSavedCards(savedCards);
        setFoundSavedCards(savedCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("foundCards"))) {
      setRenderedCards(renderCards(foundCards));
      setIsSearch(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isCheckboxChecked", JSON.stringify(isCheckboxChecked));
  }, [isCheckboxChecked]);

  useEffect(() => {
    tokenCheck();
    Promise.all([mainApi.getUserInfo(), mainApi.getSavedCards()])
      .then(([userData, savedCards]) => {
        setCurrentUser(userData);
        setSavedCards(savedCards.filter((card) => card.owner === userData._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedIn]);

  useEffect(() => {
    setFoundCards(foundCards.filter(movie => movie.duration <= 40));
  }, [isCheckboxChecked]);

  useEffect(() => {
    setFoundSavedCards(foundSavedCards.filter(card => card.duration <= 40));
  }, [isSavedCheckboxChecked]);

  useEffect(() => {
    setRenderedCards(renderCards(foundCards));
    setIsAllCardsRendered(foundCards.length === renderCards(foundCards).length);
  }, [foundCards]);

  useEffect(() => {
    setIsAllCardsRendered(foundCards.length === renderedCards.length);
  }, [renderedCards, foundCards]);

  useEffect(() => {
    setFoundSavedCards(savedCards);
  }, [savedCards]);

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.getContent(jwt).then((res) => {
        if (res) {
          setLoggedIn(true);
        }
      })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function signOut() {
    mainApi.logout()
      .then(() => {
        setLoggedIn(false);
        localStorage.removeItem('jwt');
        localStorage.removeItem("foundCards");
        localStorage.removeItem("isCheckboxChecked");
        localStorage.removeItem("searchInputValue");
        setFoundCards([]);
        setIsCheckboxChecked(false);
        setIsSearch(false);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    if (!this.state.email || !this.state.password) {
      return;
    }
    mainApi.authorize(this.state.password, this.state.email)
      .then((data) => {
        if (data.token) {
          this.setState({
            email: '',
            password: ''
          }, () => {
            this.props.handleLogin();
            this.props.history.push('/movies');
          })
        }
      })
      .catch(err => {
        setLoginError(err)
      })
      .finally(() => setIsLoading(false));
  }

  function handleRegisterSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const { password, email, name } = this.state;
    mainApi.register(password, email, name).then((res) => {
      if (res) {
        mainApi.authorize(password, res.email)
          .then((data) => {
            if (data.token) {
              this.setState({
                email: '',
                password: ''
              }, () => {
                setLoggedIn(true);
                this.props.history.push('/movies');
              })
            }
          })
      }
    }
    )
      .catch((err) => {
        setRegisterError(err);
      })
      .finally(() => setIsLoading(false));
  }

  function handleUpdateUser({ name, email }) {
    if (name === currentUser.name && email === currentUser.email) {
      return false;
    }
    setIsLoading(true);
    mainApi.setUserInfo({ name: name || currentUser.name, email: email || currentUser.email })
      .then(res => {
        setIsInfoTooltipOpen(true);
        setCurrentUser(res);
        setIsEdit(false);
      })
      .catch((err) => {
        setUpdateError(err);
      })
      .finally(() => setIsLoading(false));
  }

  function closeInfoTooltip() {
    setIsInfoTooltipOpen(false);
  }

  function onEditClick() {
    setIsEdit(true);
  }

  function handleMenuClick() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function renderCards(cards) {
    const screenWidth = window.screen.width;
    if (cards.length > 12 && screenWidth >= 1280) {
      return cards.slice(0, 12);
    }
    if (cards.length > 8 && screenWidth >= 768 && screenWidth < 1280) {
      return cards.slice(0, 8);
    }
    if (cards.length > 5 && screenWidth < 768) {
      return cards.slice(0, 5);
    }
    return cards;
  }

  function onButtonClick() {
    const screenWidth = window.screen.width;
    if (screenWidth >= 1280 && foundCards.length - renderedCards.length > 3) {
      setRenderedCards(foundCards.slice(0, renderedCards.length + 3));
      return;
    }
    if (screenWidth >= 768 && screenWidth < 1280 && foundCards.length - renderedCards.length > 2) {
      setRenderedCards(foundCards.slice(0, renderedCards.length + 2));
      return;
    }
    if (screenWidth < 768 && foundCards.length - renderedCards.length > 1) {
      setRenderedCards(foundCards.slice(0, renderedCards.length + 1));
      return;
    }
    setRenderedCards(foundCards);
    setIsAllCardsRendered(true);
  }

  function handleFindMoviesFormSubmit(keyword) {
    setIsSearch(true);
    let moviesCards = cards.filter((card) => card.nameRU.toLowerCase().includes(keyword.toLowerCase()));
    if (isCheckboxChecked) {
      moviesCards = moviesCards.filter(movie => movie.duration <= 40);
    }
    setFoundCards(moviesCards);
    localStorage.setItem('foundCards', JSON.stringify(moviesCards));
    localStorage.setItem('searchInputValue', JSON.stringify(keyword));
    localStorage.setItem('isCheckboxChecked', JSON.stringify(isCheckboxChecked));
  }

  function handleFindSavedMoviesFormSubmit(keyword) {
    let filteredSavedCards = savedCards.filter((card) => card.nameRU.toLowerCase().includes(keyword.toLowerCase()));
    if (isSavedCheckboxChecked) {
      filteredSavedCards = filteredSavedCards.filter(movie => movie.duration <= 40);
    }
    setFoundSavedCards(filteredSavedCards);
  }

  function handleCheckboxChange(e) {
    setIsCheckboxChecked(e.target.checked);
  }

  function handleSavedCheckboxChange(e) {
    setIsSavedCheckboxChecked(e.target.checked);
  }

  function handleSaveCard(card) {
    setIsLoading(true);
    mainApi.saveCard({
      country: card.country || "-",
      director: card.director || "-",
      duration: card.duration,
      year: card.year,
      description: card.description || "-",
      image: `https://api.nomoreparties.co/${card.image.url}`,
      trailerLink: card.trailerLink,
      nameRU: card.nameRU,
      nameEN: card.nameEN || "=",
      thumbnail: `https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`,
      movieId: card.id
    })
      .then((res) => {
        setSavedCards([...savedCards, res]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleDeleteCard(card) {
    setIsLoading(true);
    const cardId = card._id ? card._id : savedCards.find((savedCard) => savedCard.movieId === card.id)._id;
    mainApi.deleteCard(cardId)
      .then(() => {
        setSavedCards(savedCards.filter((savedCard) => savedCard._id !== cardId));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleCardButtonClick(card) {
    if (savedCards.find((savedCard) => savedCard.movieId === card.id)) {
      handleDeleteCard(card);
    } else {
      handleSaveCard(card);
    }
  }

  window.addEventListener('resize', () => {
    setTimeout(() => setRenderedCards(renderCards(foundCards)), 200);
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Header loggedIn={loggedIn} isMenuOpen={isMenuOpen} onMenuClick={handleMenuClick} onClose={closeMenu} />
            <Main />
            <Footer />
          </div>
        </Route>
        <ProtectedRoute path="/movies"
          loggedIn={loggedIn}
          component={() => {
            return (
              <div className='App'>
                <Header loggedIn={loggedIn} isMenuOpen={isMenuOpen} onMenuClick={handleMenuClick} onClose={closeMenu} />
                <Movies handleFindMoviesFormSubmit={handleFindMoviesFormSubmit} handleCheckboxChange={handleCheckboxChange}
                  cards={cards} renderedCards={renderedCards} isAllCardsRendered={isAllCardsRendered} onButtonClick={onButtonClick}
                  isLoading={isLoading} handleSaveCard={handleCardButtonClick} savedMovies={savedCards} isSearch={isSearch}
                  isCheckboxChecked={isCheckboxChecked} />
                <Footer />
              </div>
            )
          }
          } />
        <ProtectedRoute path="/saved-movies"
          loggedIn={loggedIn}
          component={() => {
            return (
              <div className='App'>
                <Header loggedIn={loggedIn} isMenuOpen={isMenuOpen} onMenuClick={handleMenuClick} onClose={closeMenu} />
                <SavedMovies cards={savedCards} handleDelete={handleDeleteCard} foundSavedCards={foundSavedCards}
                  handleSubmit={handleFindSavedMoviesFormSubmit} handleCheckboxChange={handleSavedCheckboxChange}
                  isLoading={isLoading} isSavedCheckboxChecked={isSavedCheckboxChecked} />
                <Footer />
              </div>
            )
          }
          } />
        <Route path="/signup">
          {loggedIn && <Redirect to="/" />}
          <div className='App'>
            <Register handleSubmit={handleRegisterSubmit} authError={registerError} isLoading={isLoading} />
          </div>
        </Route>
        <Route path="/signin">
          {loggedIn && <Redirect to="/" />}
          <div className='App'>
            <Login handleLogin={handleLogin} handleSubmit={handleLoginSubmit} authError={loginError} isLoading={isLoading} />
          </div>
        </Route>
        <ProtectedRoute path='/profile'
          loggedIn={loggedIn}
          component={() => {
            return (
              <div className='App'>
                <Header loggedIn={loggedIn} isMenuOpen={isMenuOpen} onMenuClick={handleMenuClick} onClose={closeMenu} />
                <Profile signOut={signOut} isLoading={isLoading} isEdit={isEdit} onClick={onEditClick} updateError={updateError}
                  handleSubmit={handleUpdateUser} />
                <InfoTooltip isOpen={isInfoTooltipOpen} onClose={closeInfoTooltip} />
              </div>
            )
          }
          } />
        <ProtectedRoute
          loggedIn={loggedIn}
          component={() => {
            return (
              <div className='App'>
                <NotFound />
              </div>
            )
          }
          } />
      </Switch>
    </CurrentUserContext.Provider >
  );
}

export default withRouter(App);
