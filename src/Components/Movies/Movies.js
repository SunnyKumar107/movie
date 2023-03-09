import React, { useState, useEffect } from "react";
import MovieCard from "../movieCard/MovieCard";
import Styles from "./Movies.module.css";
import { ThreeDots } from "react-loader-spinner";
import ChangePage from "../ChangePage/ChangePage";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    async function getmovie() {
      const movieCollection = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${page}`
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

  const prevPage = (p) => {
    setPage(p);
  };
  const nextPage = (n) => {
    setPage(n);
  };

  return (
    <div className={Styles.movies}>
      {loading ? (
        <div className={Styles.loading}>
          <ThreeDots color="white" />
        </div>
      ) : (
        <>
          <div className={Styles.movies_list}>
            <MovieCard movies={movies} page={page} movieType={"popular"} />
          </div>

          <ChangePage page={page} prevPage={prevPage} nextPage={nextPage} />
          {/* <div className={Styles.page_slide}>
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
          </div> */}
        </>
      )}
    </div>
  );
};

export default Movies;
