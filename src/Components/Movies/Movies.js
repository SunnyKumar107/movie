import React, { useState, useEffect } from "react";
import MovieCard from "../movieCard/MovieCard";
import Styles from "./Movies.module.css";
import { ThreeDots } from "react-loader-spinner";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getmovie() {
      const movieCollection = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      );
      const responce = await movieCollection.json();
      setMovies(responce.results);
    }
    getmovie();
    setLoading(false);

    /*fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
  )
    .then((responce) => responce.json())
    .then((data) => setMovies(data.results));*/
  }, [movies]);

  return (
    <div className={Styles.movies}>
      {loading ? (
        <div className={Styles.loading}>
          <ThreeDots color="white" />
        </div>
      ) : (
        <MovieCard movies={movies} />
      )}
    </div>
  );
};

export default Movies;
