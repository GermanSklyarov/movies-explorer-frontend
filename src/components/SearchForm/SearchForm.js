import find from '../../images/find.svg';

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <input type="text" className="search__form-input" placeholder="Фильм" />
        <button type="submit" className="search__form-button">
          <img className="search__form-button-icon" src={find} alt="найти" />
        </button>
        <input type="checkbox" id='short-films' className='search__form-checkbox' />
        <label htmlFor="short-films" className='search__form-checkbox-label'>Короткометражки</label>
      </form>
    </section>
  );
}

export default SearchForm;