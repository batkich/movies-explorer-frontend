import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies(props) {
  React.useEffect(() => {
    props.handleDeleteButton();
  });

  function handleSearch(array) {
    props.handleSearchSaved(array);
  }

  return (
    <div className="savedmovies">
      <SearchForm searchSaved={handleSearch}></SearchForm>
      <MoviesCardList
        films={props.savedFilmsArray}
        deleteButton={props.handleDeleteFilm}
      ></MoviesCardList>
    </div>
  );
}

export default SavedMovies;
