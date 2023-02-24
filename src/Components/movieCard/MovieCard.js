import React from "react";
import Styles from "./MovieCard.module.css";
import movies from "../movies.json";
import { NavLink } from "react-router-dom";
import ReactStars from "react-stars";

const MovieCard = () => {
  return movies.map((e, i) => (
    <NavLink to={`/moviedetail/${e.ID}`} state={{ ID: e.ID }} key={i}>
      <div className={Styles.movie_card}>
        <img src={e.Poster} />
        <h4 className={Styles.card_title}>{e.Title}</h4>
        <h4 className={Styles.rating}>
          Rating:
          <span>
            <ReactStars size={15} half={true} value={e.Rating} edit={false} />
          </span>
        </h4>
        <h4>Year: {e.Year}</h4>
      </div>
    </NavLink>
  ));
};

export default MovieCard;
