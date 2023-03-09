import React, { useState, useEffect } from "react";
import Styles from "./MovieType.module.css";
import { NavLink, useParams } from "react-router-dom";
import ReactStars from "react-stars";
import { ThreeDots } from "react-loader-spinner";

const MovieType = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { type } = useParams();

  useEffect(() => {
    setLoading(true);
    async function getmovie() {
      const movieCollection = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${page}`
      );
      const responce = await movieCollection.json();
      setMovies(responce.results);
    }
    getmovie();
    setLoading(false);
  }, []);
  return (
    <div className={Styles.movietype}>
      {loading ? (
        <div className={Styles.loading}>
          <ThreeDots color="white" />
        </div>
      ) : (
        <>
          <div className={Styles.movie_list}>
            {movies.map((e, i) => (
              <NavLink
                to={`/moviedetail/${e.title}`}
                state={{ ID: e.id, type: type, page: page }}
                key={i}
              >
                <div className={Styles.movie_card}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${e.poster_path}`}
                  />
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
          <div className={Styles.page_slide}>
            {page === 1 ? null : (
              <button
                className={Styles.slide_btn}
                onClick={() => setPage(page - 1)}
              >
                <i class="fa-solid fa-angle-left"></i> Prev
              </button>
            )}
            <p>page: {page}</p>
            <button
              className={Styles.slide_btn}
              onClick={() => setPage(page + 1)}
            >
              Next <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieType;
