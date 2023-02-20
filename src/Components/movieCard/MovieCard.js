import React from "react";
import Styles from "./MovieCard.module.css";
import movies from "../movies.json";

const MovieCard = () => {
  return movies.map((e, i) => (
    <div className={Styles.movie_card} key={i}>
      <img src={e.Poster} />
      <h4 className={Styles.card_title}>{e.Title}</h4>
      <h4>Rating: {e.Rating}</h4>
      <h4>Year: {e.Year}</h4>
    </div>
  ));
};

export default MovieCard;
