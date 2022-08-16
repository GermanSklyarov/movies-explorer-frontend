import saveIcon from '../../images/save.svg';
import savedIcon from '../../images/saved.svg';
import deleteIcon from '../../images/delete-icon.svg'

function MoviesCard({ card, savedMovies, isSavedMovies, handleCardButtonClick }) {
  const isSaved = isSavedMovies ? true : savedMovies.find((savedCard) => savedCard.movieId === card.id);
  return (
    <li className="movies__card">
      <div className="movies__card-caption">
        <div className="movies__wrapper">
          <h3 className="movies__card-title">{card.nameRU}</h3>
          <p className="movies__card-duration">{card.duration >= 60 ? `${Math.floor(card.duration / 60)}ч ${card.duration % 60}м` : `${card.duration}м`}</p>
        </div>
        {!isSavedMovies &&
          <button type="button" className="movies__card-button movies__card-button-save" onClick={() => handleCardButtonClick(card)}>
            <img className="movies__button-icon" src={isSaved ? savedIcon : saveIcon} alt="сохранить" />
          </button>
        }
        {isSavedMovies &&
          <button type="button" className="movies__card-button movies__card-button-delete" onClick={() => handleCardButtonClick(card)}>
            <img className="movies__button-icon" src={deleteIcon} alt="удалить" />
          </button>
        }
      </div>
      <a href={card.trailerLink} target="_blank">
        <img className="movies__card-picture" src={isSavedMovies ? card.image : `https://api.nomoreparties.co/${card.image.url}`} alt={card.nameRU} />
      </a>
    </li>
  );
}

export default MoviesCard;