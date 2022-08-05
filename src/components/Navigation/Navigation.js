import { NavLink } from 'react-router-dom';

function Navigation({ isMenu, onClick }) {
  return (
    <nav className={`navigation ${isMenu && 'navigation navigation_type_menu'}`}>
      {isMenu && <NavLink to="/" className="navigation__link" onClick={onClick}>Главная</NavLink>}
      <NavLink to="/movies" className="navigation__link" activeClassName="navigation__link_active" onClick={onClick}>Фильмы</NavLink>
      <NavLink to="/saved-movies" className="navigation__link" activeClassName="navigation__link_active" onClick={onClick}>Сохранённые фильмы</NavLink>
      <NavLink to="/profile" className="navigation__link navigation__link_type_profile" activeClassName="navigation__link_active" onClick={onClick}>
        <span>Аккаунт</span>
        <span className='navigation__profile-icon'></span>
      </NavLink>
    </nav>
  );
}

export default Navigation;