import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <ul
      className={
        props.visibility
          ? "moviescardlist moviescardlist_type_disabled"
          : "moviescardlist"
      }
    >
      {props.filmMessage ? (
        <h2 className="moviescardlist__message">Ничего не найдено</h2>
      ) : (
        props.films.map((card) => (
          <MoviesCard
            key={card.id}
            card={card}
            deleteButton={props.deleteButton}
            handleSaveMovie={props.handleSaveMovie}
            delete={props.delete}
            handleRender={props.handleRender}
          />
        ))
      )}
    </ul>
  );
}

export default MoviesCardList;
