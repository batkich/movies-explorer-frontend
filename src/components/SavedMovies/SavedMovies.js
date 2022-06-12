import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies(props) {
  return (
    <div className="savedmovies">
      <SearchForm></SearchForm>
      <MoviesCardList films={props.savedfilmsArray}></MoviesCardList>
    </div>
  );
}

export default SavedMovies;
