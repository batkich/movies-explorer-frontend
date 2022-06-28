import React from "react";
import "./SearchForm.css";
import { useHistory } from "react-router-dom";

function SearchForm(props) {
  const history = useHistory();

  const newFilmArray = [];

  const filmsArray = JSON.parse(localStorage.getItem("filmsArray"));

  const [searchValue, setsearchValue] = React.useState("");

  const [searchType, setsearchType] = React.useState("false");

  React.useEffect(() => {
    const input = document.querySelector(".form-box__input");
    const checkBox = document.querySelector(".form-box__input_type_checkbox");
    if (history.location.pathname === "/movies") {
      setsearchType(true);
      const keyword = localStorage.getItem("search-keyword");
      const checkbox = JSON.parse(localStorage.getItem("checkbox"));
      input.value = keyword;
      checkBox.checked = checkbox;
    } else if (history.location.pathname === "/saved-movies") {
      setsearchType(false);
    }
  }, [props.locationMovies]);

  function handlesetsearchValue(e) {
    setsearchValue(e.target.value);
  }

  function toFilterFilms(array) {
    const checkbox = document.querySelector(".form-box__input_type_checkbox");
    let arrayToFilter = array;
    if (checkbox.checked) {
      const shortArray = arrayToFilter.filter((element) => {
        return element.duration < 40;
      });
      arrayToFilter = shortArray;
    }
    const filteredFilms = arrayToFilter.map((film) => {
      let filterfilm;
      if (film.nameRU.toLowerCase().includes(searchValue.toLowerCase())) {
        return (filterfilm = film);
      }

      return filterfilm;
    });

    filteredFilms.forEach((film) => {
      if (film !== undefined) newFilmArray.push(film);
    });
    return newFilmArray;
  }

  function toSearch(e) {
    e.preventDefault();
    toFilterFilms(filmsArray);
    let arrayUserFilms = JSON.stringify(newFilmArray);
    const checkbox = document.querySelector(".form-box__input_type_checkbox");
    localStorage.setItem("search-keyword", searchValue);
    localStorage.setItem("user-films", arrayUserFilms);
    localStorage.setItem("checkbox", checkbox.checked);
    props.search(newFilmArray);
  }

  function toSearchSaved(e) {
    e.preventDefault();
    props.handlePreloaderVisibility();
    const savedFilms = JSON.parse(localStorage.getItem("savedFilms"));
    toFilterFilms(savedFilms);
    props.searchSaved(newFilmArray);
  }

  return (
    <div className="searchform">
      <form className="form">
        <fieldset className="form-box">
          <input
            onChange={handlesetsearchValue}
            className="form-box__input"
            type="text"
            placeholder="Фильм"
            minLength="1"
            required
          ></input>
          {!searchValue ? (
            <button
              className="form-box__button  form-box__button_disabled"
              disabled
            >
              Поиск
            </button>
          ) : (
            <button
              className="form-box__button"
              onClick={searchType ? toSearch : toSearchSaved}
            >
              Поиск
            </button>
          )}
        </fieldset>
        <fieldset className="form-box form-box_type_checkbox">
          <label className="form-box__label">
            <input
              type="checkbox"
              className="form-box__input form-box__input_type_checkbox"
            ></input>
            <span className="form-box__pseudoinput"></span>
          </label>
          <span className="form-box__checkbox-text">Короткометражки</span>
        </fieldset>
      </form>
      <div className="searchform__line"></div>
    </div>
  );
}

export default SearchForm;
