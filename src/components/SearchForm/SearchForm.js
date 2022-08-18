import React, { useState } from "react";
import find from "../../images/find.svg";

function SearchForm({
  handleSubmit,
  handleCheckboxChange,
  isCheckboxChecked,
  isSavedMovies,
}) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem("searchInputValue")) || ""
  );
  const [valueSaved, setValueSaved] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleChangeSaved(e) {
    setValueSaved(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    const keyword = isSavedMovies ? valueSaved : value;
    handleSubmit(keyword);
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={onSubmit}>
        <input
          type="text"
          name="keyword"
          className="search__form-input"
          placeholder="Фильм"
          required
          onChange={isSavedMovies ? handleChangeSaved : handleChange}
          value={isSavedMovies ? valueSaved : value}
        />
        <button type="submit" className="search__form-button">
          <img className="search__form-button-icon" src={find} alt="найти" />
        </button>
        <input
          type="checkbox"
          id="short-films"
          className="search__form-checkbox"
          onChange={(evt) => handleCheckboxChange(evt)}
          defaultChecked={isCheckboxChecked}
        />
        <label htmlFor="short-films" className="search__form-checkbox-label">
          Короткометражки
        </label>
      </form>
    </section>
  );
}

export default SearchForm;
