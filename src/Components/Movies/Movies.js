import React from "react";
import MovieCard from "../movieCard/MovieCard";
import Styles from "./Movies.module.css";
const Movies = () => {
  return (
    <div className={Styles.Movies}>
      <MovieCard />
    </div>
  );
};

export default Movies;
