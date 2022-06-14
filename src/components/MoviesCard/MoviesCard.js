import React from "react";
import "./MoviesCard.css";
import tosavePicture from "../../images/save.svg";
import savedPicture from "../../images/save-clicked.svg";
import deletePicture from "../../images/delete.svg"

function MoviesCard(props) {

  console.log(props.deleteButton)

  return (
    <li className="moviescard">
      <img
        className="moviescard__picture"
        src={props.card.link}
        alt={props.card.title}
      ></img>
      <div className="moviescard-description">
        <div className="moviescard-description__title">
          <h3 className="moviescard-description__text">{props.card.title}</h3>
          {props.deleteButton ?           
          <button className="moviescard-description__save-button">
          <img
            className="moviescard-description__save"
            src={deletePicture}
            alt="Сохранить фильм"
          ></img>
          </button>
          :
          <button className="moviescard-description__save-button">
          <img
            className="moviescard-description__save"
            src={props.card.save ? tosavePicture : savedPicture}
            alt="Сохранить фильм"
          ></img>
          </button>
          }
        </div>
        <p className="moviescard-description__duration">
          {props.card.duration}
        </p>
      </div>
    </li>
  );
}

export default MoviesCard;
