import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {

  const [filmMessage, setFilmMessage] = React.useState(false);

  React.useEffect(() => {
    props.handleDeleteButton();
  });

  function handleSearch(array) {
    setFilmMessage(false);
    props.handleSearchSaved(array);
    if(array.length === 0) {
      setFilmMessage(true);
    }
  }

  function handlePreloaderVisibility () {
    props.handlePreloaderVisibility();
  }

  // function handleFilmMessage() {
  //   setFilmsMessage(true);
  // }

  return (
    <div className="savedmovies">
      <SearchForm searchSaved={handleSearch} handlePreloaderVisibility={handlePreloaderVisibility}></SearchForm>
      <Preloader visibility={props.elementVisible}></Preloader>
      <MoviesCardList
        visibility={props.elementVisible}
        films={props.savedFilmsArray}
        deleteButton={props.handleDeleteFilm}
        filmMessage={filmMessage}
      ></MoviesCardList>
    </div>
  );
}

export default SavedMovies;
