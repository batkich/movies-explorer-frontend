import React from "react";
import "./Movies";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import AdditionallyFilms from "../AdditionallyFilms/AdditionallyFilms";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  
  React.useEffect(() => {
    props.handleDeleteButton();
  });

  return (
    <div className="movies">
      <SearchForm></SearchForm>
      <Preloader></Preloader>
      <MoviesCardList
        films={props.filmsArray}
        deleteButton={props.deleteButton}
      ></MoviesCardList>
      <AdditionallyFilms></AdditionallyFilms>
    </div>
  );
}

export default Movies;
