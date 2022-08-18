import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({
  cards,
  handleDelete,
  foundSavedCards,
  handleSubmit,
  handleCheckboxChange,
  isLoading,
  isSavedCheckboxChecked,
}) {
  return (
    <>
      <SearchForm
        handleSubmit={handleSubmit}
        handleCheckboxChange={handleCheckboxChange}
        isSavedMovies="true"
        isCheckboxChecked={isSavedCheckboxChecked}
      />
      <MoviesCardList
        cards={cards}
        renderedCards={foundSavedCards}
        isSavedMovies="true"
        handleCardButtonClick={handleDelete}
        isLoading={isLoading}
      />
    </>
  );
}

export default SavedMovies;
