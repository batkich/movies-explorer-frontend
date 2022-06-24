import React from "react";
import "./Movies";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import AdditionallyFilms from "../AdditionallyFilms/AdditionallyFilms";
import Preloader from "../Preloader/Preloader";
import { useHistory } from "react-router-dom";

function Movies(props) {
  const history = useHistory();

  const [filteredFilmArray, setFilteredFilmArray] = React.useState([]);
  const [filmsMessage, setFilmsMessage] = React.useState(false);
  const [rowsNumber, setRowsNumber] = React.useState(0);
  const [divider, setDivider] = React.useState(0);
  const [resizeValue, setResizeValue] = React.useState(
    document.documentElement.scrollWidth
  );

  React.useEffect(() => {
    props.handleDeleteButton();
  });

  React.useEffect(() => {
    if (history.location.pathname === "/movies") {
      const films = JSON.parse(localStorage.getItem("filmsArrayInPage"));
      if (films) {
        searchContent(films);
      }
    }
  }, [props.locationMovies]);

  window.addEventListener("resize", () => {
    setResizeValue(document.documentElement.scrollWidth);
  });

  function transformFilmsArray(array, rowsNumber, divider) {
    if (rowsNumber > 0) {
      array.splice(0, rowsNumber);
      setRowsNumber(0);
    }
    const newElements = array.slice(0, divider);
    array.splice(0, divider);
    setFilteredFilmArray([...filteredFilmArray, ...newElements]);
    localStorage.setItem("usersFilmArray", JSON.stringify(array));
    if (array.length === 0) {
      props.handleAddButton(false);
    }
  }

  function addFilmstoList() {
    const userFilmArray = JSON.parse(localStorage.getItem("usersFilmArray"));
    transformFilmsArray(userFilmArray, rowsNumber, divider);
  }

  function showFirstArray(array, value) {
    setFilmsMessage(false);
    const mappedArray = array.map((element, index) => {
      let newElement;
      if (index < value) {
        return (newElement = element);
      }
      return newElement;
    });
    const newfilteredArray = mappedArray.filter((item) => item !== undefined);
    setFilteredFilmArray(newfilteredArray);
    localStorage.setItem("usersFilmArray", JSON.stringify(array));
    localStorage.setItem("filmsArrayInPage", JSON.stringify(array));
    if (newfilteredArray.length === 0) {
      setFilmsMessage(true);
    }
    if (array.length > value) {
      props.searchMovies(true);
    } else {
      props.searchMovies(false);
    }
  }

  function searchContent(array) {
    if (resizeValue <= 480) {
      showFirstArray(array, 5);
      setRowsNumber(5);
      setDivider(2);
    } else if (resizeValue <= 1124) {
      showFirstArray(array, 8);
      setRowsNumber(8);
      setDivider(2);
    } else {
      showFirstArray(array, 12);
      setRowsNumber(12);
      setDivider(3);
    }
  }

  return (
    <div className="movies">
      <SearchForm search={searchContent}></SearchForm>
      <Preloader visibility={props.elementVisible}></Preloader>
      <MoviesCardList
        films={filteredFilmArray}
        filmMessage={filmsMessage}
        deleteButton={props.deleteButton}
        visibility={props.elementVisible}
        rowsNumber={props.rowsNumber}
        handleSaveMovie={props.handleSaveMovie}
        render={props.render}
        delete={props.handleDeleteFilm}
        handleRender={props.handleRender}
      ></MoviesCardList>
      <AdditionallyFilms
        visibility={props.addButtonVisible}
        addFilms={addFilmstoList}
        rowsNumber={props.rowsNumber}
        locationMovies={props.locationMovies}
      ></AdditionallyFilms>
    </div>
  );
}

export default Movies;
