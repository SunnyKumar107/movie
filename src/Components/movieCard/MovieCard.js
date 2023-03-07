import React from "react";
import Styles from "./MovieCard.module.css";
import { NavLink } from "react-router-dom";
import ReactStars from "react-stars";

const MovieCard = (props) => {
  const movieList = props.movies;

  return movieList.map((e, i) => (
    <NavLink to={`/moviedetail/${e.id}`} state={{ ID: e.id }} key={i}>
      <div className={Styles.movie_card}>
        <img src={`https://image.tmdb.org/t/p/original${e.poster_path}`} />
        <h4 className={Styles.card_title}>{e.title}</h4>
        <h4 className={Styles.rating}>
          Rating:
          <span>
            <ReactStars
              size={15}
              half={true}
              value={e.vote_average / 2}
              edit={false}
            />
          </span>
        </h4>
        <h4>Year: {e.release_date}</h4>
      </div>
    </NavLink>
  ));
};

export default MovieCard;
