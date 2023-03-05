import React, { useState, useEffect } from "react";
import ReactStars from "react-stars";
import Styles from "./MovieDetail.module.css";
import { useLocation } from "react-router-dom";

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getMovie() {
      const movieCollection = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      );
      const responce = await movieCollection.json();
      setMovie(responce.results.filter((mov) => mov.id === location.state.ID));
    }
    getMovie();
  }, []);

  return (
    <>
      {movie.map((e, i) => {
        return (
          <div className={Styles.MovieDetail} key={i}>
            <img src={`https://image.tmdb.org/t/p/original${e.poster_path}`} />
            <div className={Styles.content}>
              <h2>
                {e.title} <span>({e.release_date})</span>
              </h2>
              <ReactStars
                size={20}
                half={true}
                value={e.vote_average / 2}
                edit={false}
              />
              <p>{e.overview}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MovieDetail;
