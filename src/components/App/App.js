import React, { useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from "../SavedMovies/SavedMovies"
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <Switch>
      <Route exact path="/">
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </Route>
      <Route path="/movies">
        <div className='App'>
          <Header loggedIn="true" isMenuOpen={isMenuOpen} onMenuClick={handleMenuClick} onClose={closeMenu} />
          <Movies />
          <Footer />
        </div>
      </Route>
      <Route path="/saved-movies">
        <div className='App'>
          <Header loggedIn="true" isMenuOpen={isMenuOpen} onMenuClick={handleMenuClick} onClose={closeMenu} />
          <SavedMovies />
          <Footer />
        </div>
      </Route>
      <Route path="/signup">
        <div className='App'>
          <Register />
        </div>
      </Route>
      <Route path="/signin">
        <div className='App'>
          <Login />
        </div>
      </Route>
      <Route path='/profile'>
        <div className='App'>
          <Header loggedIn="true" isMenuOpen={isMenuOpen} onMenuClick={handleMenuClick} onClose={closeMenu} />
          <Profile />
        </div>
      </Route>
      <Route>
        <div className='App'>
          <NotFound />
        </div>
      </Route>
    </Switch>
  );
}

export default withRouter(App);
