import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <div className="movie_card">
      <img src={props.poster} />
      <h4 className="card_title">{props.title}</h4>
      <h4 className="card_rating">Rating : {props.rating}</h4>
      <h4 className="card_year">Year : {props.year}</h4>
    </div>
  );
};

export default MovieCard;
