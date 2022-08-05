import logo from "../../images/logo.svg";
import { Link, withRouter } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import menuIcon from '../../images/menu-icon.svg';

function Header({ loggedIn, isMenuOpen, onClose, onMenuClick }) {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="логотип" />
      </Link>
      {!loggedIn &&
        <nav className="header__links">
          <Link to="/signup" className="header__link">Регистрация</Link>
          <Link to="/signin" className="header__link header__button">Войти</Link>
        </nav>
      }
      {loggedIn &&
        <>
          <Navigation />
          <button type="button" className="header__menu-button" onClick={onMenuClick}>
            <img className="header__menu-button-icon" src={menuIcon} alt="меню" />
          </button>
          <div className={`header__nav-popup ${isMenuOpen && "header__nav-popup_opened"}`}>
            <div className="header__nav-popup-container">
              <Navigation isMenu="true" onClick={onClose} />
              <button className="header__nav-popup-close" type="button" aria-label="закрыть" onClick={onClose}></button>
            </div>
          </div>
        </>
      }
    </header>
  )
}

export default withRouter(Header);