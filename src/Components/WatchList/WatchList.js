import React from "react";
import Styles from "./WatchList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeToWatchLIst } from "../../services/actions/actions";

const Watchlist = () => {
  const watchlistData = useSelector((state) => state.makeWatchList);

  const dispatch = useDispatch();

  switch (watchlistData.length) {
    case 0:
      console.log(watchlistData.length);
      return (
        <div className={Styles.empty_watch_list}>
          <i class="fa-sharp fa-solid fa-file-video"></i>
          <p>No Items Found!</p>
        </div>
      );
    default:
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
                  language: <span>{movie.original_language}</span>
                </p>
                <p className={Styles.rating}>
                  Rating:{" "}
                  <span>
                    <i className="fa-solid fa-star"></i> {movie.vote_average}
                  </span>
                </p>
                <button
                  onClick={() => dispatch(removeToWatchLIst(movie.id))}
                  className={Styles.remove_btn}
                >
                  Remove to Watchlist
                </button>
              </div>
            </div>
          ))}
        </div>
      );
  }
};

export default Watchlist;
