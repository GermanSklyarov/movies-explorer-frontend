import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({
  handleFindMoviesFormSubmit,
  handleCheckboxChange,
  cards,
  renderedCards,
  isAllCardsRendered,
  onButtonClick,
  isLoading,
  handleSaveCard,
  savedMovies,
  isSearch,
  isCheckboxChecked,
}) {
  return (
    <>
      <SearchForm handleSubmit={handleFindMoviesFormSubmit} handleCheckboxChange={handleCheckboxChange}
        isCheckboxChecked={isCheckboxChecked} />
      {isSearch && <MoviesCardList cards={cards} renderedCards={renderedCards} isAllCardsRendered={isAllCardsRendered}
        onButtonClick={onButtonClick} isLoading={isLoading} handleCardButtonClick={handleSaveCard} savedMovies={savedMovies} />}
    </>
  );
}

export default Movies;