import React, { useState, useEffect } from "react";
import Styles from "./MovieType.module.css";
import { NavLink, useParams } from "react-router-dom";
import ReactStars from "react-stars";

const MovieType = () => {
  const [movies, setMovies] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    async function getmovie() {
      const movieCollection = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      const responce = await movieCollection.json();
      setMovies(responce.results);
    }
    getmovie();
  }, []);
  return (
    <div className={Styles.movietype}>
      {movies.map((e, i) => (
        <NavLink
          to={`/moviedetail/${e.title}`}
          state={{ ID: e.id, type: type }}
          key={i}
        >
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
      ))}
    </div>
  );
};

export default MovieType;
