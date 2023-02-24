import React, { useState, useEffect } from "react";
import ReactStars from "react-stars";
import Styles from "./MovieDetail.module.css";
import movies from "../movies.json";
import { useLocation } from "react-router-dom";

const MovieDetail = () => {
  const [movie, setMovie] = useState({
    Title: "",
    Year: "",
    Poster: "",
    Description: "",
    Rating: 0,
  });
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      const data = await movies[location.state.ID - 1];
      setMovie(data);
    }
    fetchData();
  }, []);

  return (
    <div className={Styles.MovieDetail}>
      <img src={movie.Poster} />
      <div className={Styles.content}>
        <h2>
          {movie.Title} <span>({movie.Year})</span>
        </h2>
        <ReactStars size={20} half={true} value={movie.Rating} edit={false} />
        <p>{movie.Description}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
