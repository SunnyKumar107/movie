import React, { useState, useEffect } from "react";
import Styles from "./MovieDetail.module.css";
import { useLocation } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { addToWatchList } from "../../services/actions/actions";

const MovieDetail = () => {
  const [movie, setMovie] = useState({
    adult: true,
    backdrop_path: "",
    genre_ids: [],
    id: null,
    original_language: "",
    original_title: "",
    overview: "",
    popularity: "",
    poster_path: "",
    release_date: "",
    title: "",
    video: false,
    vote_average: "",
    vote_count: "",
  });
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    async function getMovie() {
      const movie_detail = await fetch(
        `https://api.themoviedb.org/3/movie/${location.state.ID}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      const responce = await movie_detail.json();
      setMovie({
        adult: responce.adult,
        backdrop_path: responce.backdrop_path,
        genre_ids: responce.genre_ids,
        id: responce.id,
        original_language: responce.original_language,
        original_title: responce.original_language,
        overview: responce.overview,
        popularity: responce.popularity,
        poster_path: responce.poster_path,
        release_date: responce.release_date,
        title: responce.title,
        video: responce.video,
        vote_average: responce.vote_average,
        vote_count: responce.vote_count,
      });
    }
    getMovie();
    setLoading(false);
  }, []);

  const dispatch = useDispatch();

  return (
    <>
      {loading ? (
        <div className={Styles.loading}>
          <ThreeDots color="white" />
        </div>
      ) : (
        <div className={Styles.MovieDetail}>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="background_image"
            className={Styles.backdrop_path}
          />
          <div className={Styles.centre_part}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="movie_poster"
              className={Styles.poster_path}
            />
            <div className={Styles.movie_full_info}>
              <h2 className={Styles.title_date}>
                {movie.title} <span>{movie.release_date}</span>{" "}
              </h2>
              <p className={Styles.rating}>
                Rating:{" "}
                <span>
                  <i className="fa-solid fa-star"></i> {movie.vote_average}
                </span>
              </p>
              <p className={Styles.language}>
                Language: <span>{movie.original_language}</span>
              </p>
              <p className={Styles.overview}>{movie.overview}</p>
            </div>
          </div>
          <div className={Styles.watchlist_btn_container}>
            <button
              onClick={() => dispatch(addToWatchList(movie))}
              className={Styles.watchlist_btn}
            >
              + Add to Watchlist
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
