import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ cards, renderedCards, isAllCardsRendered, isSavedMovies, onButtonClick, isLoading, handleCardButtonClick, savedMovies }) {
  return (
    <section className="movies">
      <ul className="movies__card-list">
        {isLoading && <Preloader />}
        {!isLoading && (renderedCards.length > 0) &&
          renderedCards.map((card) => (
            <MoviesCard key={card.id} card={card} isSavedMovies={isSavedMovies} handleCardButtonClick={handleCardButtonClick} savedMovies={savedMovies} />
          ))
        }
        {(renderedCards.length === 0) && <h2 className='movies__card-list-text'>Ничего не найдено</h2>}
        {(cards.length > 3 && !isSavedMovies && !isAllCardsRendered) &&
          <button type='button' className='movies__card-list-button' onClick={onButtonClick}>Ещё</button>
        }
      </ul>
    </section>
  );
}

export default MoviesCardList;