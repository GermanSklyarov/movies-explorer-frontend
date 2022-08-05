import saveIcon from '../../images/save.svg';
import deleteIcon from '../../images/delete-icon.svg'

function MoviesCard({ card, isSavedMovies }) {
  return (
    <li className="movies__card">
      <div className="movies__card-caption">
        <div className="movies__wrapper">
          <h3 className="movies__card-title">{card.nameRU}</h3>
          <p className="movies__card-duration">{card.duration}</p>
        </div>
        {!isSavedMovies &&
          <button type="button" className="movies__card-button movies__card-button-save">
            <img className="movies__button-icon" src={saveIcon} alt="сохранить" />
          </button>
        }
        {isSavedMovies &&
          <button type="button" className="movies__card-button movies__card-button-delete">
            <img className="movies__button-icon" src={deleteIcon} alt="удалить" />
          </button>
        }
      </div>
      <img className="movies__card-picture" src={card.image} alt={card.nameRU} />
    </li >
  );
}

export default MoviesCard;