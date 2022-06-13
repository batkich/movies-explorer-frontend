import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <ul className="moviescardlist">
      {props.films.map((card) => (
        <MoviesCard key={card._id} card={card} deleteButton={props.deleteButton}/>
      ))}
    </ul>
  );
}

export default MoviesCardList;
