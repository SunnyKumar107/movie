import React from "react";
import Styles from "./WatchList.module.css";
import { useSelector } from "react-redux";

const Watchlist = () => {
  const watchlistData = useSelector((state) => state.makeWatchList);

  console.log(watchlistData);

  return (
    <div className={Styles.watchlist}>
      {watchlistData.map((movie) => (
        <div className={Styles.watchlist_card}>
          <img
            alt="Poster"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            className={Styles.card_img}
          />
          <div className={Styles.watchlist_card_detail}>
            <h2 className={Styles.movie_name}>
              {movie.title} <span>{movie.release_date}</span>
            </h2>
            <p className={Styles.language}>
              language: {movie.original_language}
            </p>
            <p className={Styles.rating}>
              Rating:{" "}
              <span>
                <i className="fa-solid fa-star"></i> {movie.vote_average}
              </span>
            </p>
            <button className={Styles.remove_btn}>Remove to Watchlist</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Watchlist;
