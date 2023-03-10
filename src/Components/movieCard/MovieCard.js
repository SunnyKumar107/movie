import React from "react";
import Styles from "./MovieCard.module.css";
import { NavLink } from "react-router-dom";

const MovieCard = (props) => {
  const movieList = props.movies;
  const page = props.page;
  const movieType = props.movieType;

  return movieList.map((e) => (
    <NavLink
      to={`/moviedetail/${e.title}`}
      state={{ ID: e.id, movieType: movieType, page: page }}
      key={e.id}
    >
      <div className={Styles.movie_card}>
        <img src={`https://image.tmdb.org/t/p/original${e.poster_path}`} />
      </div>
    </NavLink>
  ));
};

export default MovieCard;
