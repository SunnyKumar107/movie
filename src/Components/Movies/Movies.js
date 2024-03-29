import React, { useState, useEffect } from "react";
import MovieCard from "../movieCard/MovieCard";
import Styles from "./Movies.module.css";
import { ThreeDots } from "react-loader-spinner";
import ChangePage from "../ChangePage/ChangePage";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MovieCarousel from "./MovieCarousel/MovieCarousel";

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
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        showArrows={true}
        showIndicators={false}
      >
        {movies.map((movie) => (
          <MovieCarousel movie={movie} page={page} />
        ))}
      </Carousel>
      <h3 className={Styles.movie_type_heading}>Popular:</h3>
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
        </>
      )}
    </div>
  );
};

export default Movies;
