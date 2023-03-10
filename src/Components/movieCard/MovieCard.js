import React from "react";
import Styles from "./MovieCard.module.css";
import { NavLink } from "react-router-dom";

const MovieCard = (props) => {
  const movieList = props.movies;
  const page = props.page;
  const movieType = props.movieType;

  return movieList.map((movie) => (
    <NavLink
      to={`/moviedetail/${movie.title}`}
      state={{ ID: movie.id, movieType: movieType, page: page }}
      key={movie.id}
    >
      <div className={Styles.movie_card}>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
      </div>
    </NavLink>
  ));
};

export default MovieCard;
