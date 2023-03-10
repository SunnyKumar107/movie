import React, { useState, useEffect } from "react";
import ReactStars from "react-stars";
import Styles from "./MovieDetail.module.css";
import { useLocation } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const listType = location.state.movieType;
  const page = location.state.page;

  useEffect(() => {
    setLoading(true);
    async function getMovie() {
      const movieCollection = await fetch(
        `https://api.themoviedb.org/3/movie/${listType}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${page}`
      );
      const responce = await movieCollection.json();
      setMovie(responce.results.filter((mov) => mov.id === location.state.ID));
    }
    getMovie();
    setLoading(false);
  }, []);

  console.log(listType);

  return (
    <>
      {loading ? (
        <div className={Styles.loading}>
          <ThreeDots color="white" />
        </div>
      ) : (
        movie.map((movie) => {
          return (
            <div className={Styles.MovieDetail} key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
              <div className={Styles.content}>
                <h2>
                  {movie.title} <span>({movie.release_date})</span>
                </h2>
                <ReactStars
                  size={20}
                  half={true}
                  value={movie.vote_average / 2}
                  edit={false}
                />
                <p>{movie.overview}</p>
                <button className={Styles.add_btn}>
                  <span>+</span> Add to Watchlist
                </button>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default MovieDetail;
