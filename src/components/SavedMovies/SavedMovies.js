import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies(props) {

  React.useEffect(() => {
    props.handleDeleteButton();
  });
  

  return (
    <div className="savedmovies">
      <SearchForm></SearchForm>
      <MoviesCardList
        films={props.savedfilmsArray}
        deleteButton={props.deleteButton}
      ></MoviesCardList>
    </div>
  );
}

export default SavedMovies;
