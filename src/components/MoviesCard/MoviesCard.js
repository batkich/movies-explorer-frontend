import React from "react";
import "./MoviesCard.css";
import tosavePicture from "../../images/save.svg";
import savedPicture from "../../images/save-clicked.svg";
import deletePicture from "../../images/delete.svg";
import * as Constants from "../../utils/constants";
import convertDuration from "../../utils/convertDuration";

function MoviesCard(props) {
  const [savedCard, setSavedCard] = React.useState(false);

  React.useEffect(() => {
    setSavedCard(false);
    const savedFilms = JSON.parse(localStorage.getItem("savedFilms"));
    const card = props.card;
    savedFilms.forEach((item) => {
      if (item.nameRU === card.nameRU) {
        setSavedCard(true);
      }
    });
  });

  function openTrailer() {
    window.open(`${props.card.trailerLink}`, "_blank");
  }

  function deletefilm() {
    props.deleteButton(props.card.id);
  }

  function correctArrayKey(item) {
    if (item === null) {
      return (item = "Unknown");
    }
    return item;
  }

  function saveFilm(e) {
    const defailtcard = {
      country: "Unknown",
      director: "Unknown",
      duration: 1,
      year: 987,
      description: "Unknown",
      image: `https://img2.freepng.ru/20180322/drq/kisspng-earth-light-planet-photography-space-earth-5ab45f0b8d5ca9.958838211521770251579.jpg`,
      trailerLink: "https://www.youtube.com/watch?v=3BqB9ocb-c4&t=358s",
      thumbnail: "https://www.youtube.com/watch?v=3BqB9ocb-c4&t=358s",
      movieId: 987,
      nameRU: "Unknown",
      nameEN: "Unknown",
    };
    const cardWithDefault = Object.assign({}, defailtcard, props.card);

    const {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
    } = cardWithDefault;

    const cardToSave = {
      country: correctArrayKey(country),
      director: correctArrayKey(director),
      duration: correctArrayKey(duration),
      year: correctArrayKey(year),
      description: correctArrayKey(description),
      image: correctArrayKey(image.url),
      trailerLink: correctArrayKey(trailerLink),
      thumbnail: correctArrayKey(thumbnail),
      movieId: correctArrayKey(movieId),
      nameRU: correctArrayKey(nameRU),
      nameEN: correctArrayKey(nameEN),
    };
    if (e.target.className === "moviescard-description__save") {
      e.target.classList.add("moviescard-description__save_type_saved");
      props.handleSaveMovie(cardToSave);
    } else if (
      e.target.className ===
      "moviescard-description__save moviescard-description__save_type_saved"
    ) {
      e.target.classList.remove("moviescard-description__save_type_saved");
      const savedFilms = JSON.parse(localStorage.getItem("savedFilms"));
      savedFilms.forEach((item) => {
        if (item.nameRU === props.card.nameRU) {
          props.delete(item.id);
        }
      });
    }
  }

  return (
    <li className="moviescard">
      <img
        className="moviescard__picture"
        src={Constants.imageBaseURL + props.card.image.url}
        alt={props.card.nameRU}
        onClick={openTrailer}
      ></img>
      <div className="moviescard-description">
        <div className="moviescard-description__title">
          <h3 className="moviescard-description__text" onClick={openTrailer}>
            {props.card.nameRU}
          </h3>
          {props.deleteButton ? (
            <button
              className="moviescard-description__save-button"
              onClick={deletefilm}
            >
              <img
                className="moviescard-description__save"
                src={deletePicture}
                alt="Удалить фильм"
              ></img>
            </button>
          ) : (
            <button
              className="moviescard-description__save-button"
              onClick={saveFilm}
            >
              <img
                className={
                  savedCard
                    ? "moviescard-description__save moviescard-description__save_type_saved"
                    : "moviescard-description__save"
                }
                src={savedCard ? savedPicture : tosavePicture}
                alt="Сохранить фильм"
              ></img>
            </button>
          )}
        </div>
        <p className="moviescard-description__duration" onClick={openTrailer}>
          {convertDuration(props.card.duration)}
        </p>
      </div>
    </li>
  );
}

export default MoviesCard;
