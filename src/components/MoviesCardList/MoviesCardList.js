import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards, isSavedMovies }) {
  return (
    <section className="movies">
      <ul className="movies__card-list">
        {cards.map((card) => (
          <MoviesCard key={card.movieId} card={card} isSavedMovies={isSavedMovies} />
        ))
        }
        {(cards.length > 3 && !isSavedMovies) &&
          <button type='button' className='movies__card-list-button'>Ещё</button>
        }
      </ul>
    </section>
  );
}

export default MoviesCardList;