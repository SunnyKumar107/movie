import React, { useState, useEffect } from "react";
import Styles from "./MovieType.module.css";
import { useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import MovieCard from "../movieCard/MovieCard";
import ChangePage from "../ChangePage/ChangePage";

const MovieType = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { movieType } = useParams();

  useEffect(() => {
    setLoading(true);
    async function getmovie() {
      const movieCollection = await fetch(
        `https://api.themoviedb.org/3/movie/${movieType}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${page}`
      );
      const responce = await movieCollection.json();
      setMovies(responce.results);
    }
    getmovie();
    setLoading(false);
  }, []);

  const prevPage = (p) => {
    setPage(p);
  };
  const nextPage = (n) => {
    setPage(n);
  };

  return (
    <div className={Styles.movietype}>
      {loading ? (
        <div className={Styles.loading}>
          <ThreeDots color="white" />
        </div>
      ) : (
        <>
          <div className={Styles.movies_list}>
            <MovieCard movies={movies} page={page} movieType={movieType} />
          </div>

          <ChangePage page={page} prevPage={prevPage} nextPage={nextPage} />
        </>
      )}
    </div>
  );
};

export default MovieType;
