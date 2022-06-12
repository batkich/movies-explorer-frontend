import "./MoviesCard.css";
import tosavePicture from "../../images/save.svg";
import savedPicture from "../../images/save-clicked.svg";

function MoviesCard(props) {
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
          <img
            className="moviescard-description__save"
            src={props.card.save ? tosavePicture : savedPicture}
            alt="Сохранить фильм"
          ></img>
        </div>
        <p className="moviescard-description__duration">
          {props.card.duration}
        </p>
      </div>
    </li>
  );
}

export default MoviesCard;
