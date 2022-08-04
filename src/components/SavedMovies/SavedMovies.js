import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import movieImage from '../../images/movie.png';

function SavedMovies() {
  const cards = [
    {
      'nameRU': '33 слова о дизайне',
      'duration': '1ч 47м',
      'image': movieImage,
      'movieId': '1'
    },
    {
      'nameRU': '33 слова о дизайне',
      'duration': '1ч 47м',
      'image': movieImage,
      'movieId': '2'
    },
    {
      'nameRU': '33 слова о дизайне',
      'duration': '1ч 47м',
      'image': movieImage,
      'movieId': '3'
    },
    {
      'nameRU': '33 слова о дизайне',
      'duration': '1ч 47м',
      'image': movieImage,
      'movieId': '4'
    }
  ];
  return (
    <>
      <SearchForm />
      <MoviesCardList cards={cards} isSavedMovies="true" />
    </>
  );
}

export default SavedMovies;