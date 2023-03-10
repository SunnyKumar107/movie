import Styles from "./MovieCarousel.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const MovieCarousel = (props) => {
  const movie = props.movie;
  const page = props.page;

  return (
    <NavLink
      to={`/moviedetail/${movie.title}`}
      state={{ ID: movie.id, movieType: "popular", page: page }}
      key={movie.id}
    >
      <div className={Styles.carousel}>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        />
        <div className={Styles.carousel_info}>
          <p className={Styles.carousel_info_rating}>
            <i className="fa-solid fa-star"></i> {movie.vote_average}
          </p>
          <p className={Styles.carousel_info_title}>{movie.title}</p>
          <p className={Styles.carousel_info_release_date}>
            {movie.release_date}
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default MovieCarousel;
