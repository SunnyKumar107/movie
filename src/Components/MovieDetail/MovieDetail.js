import React, { useState } from "react";
import ReactStars from "react-stars";
import Styles from "./MovieDetail.module.css";

const MovieDetail = () => {
  return (
    <div className={Styles.MovieDetail}>
      <img src="https://www.themoviedb.org/t/p/original/ynyDOCwNuYqqR6p1d6Nbk7ehpfv.jpg" />
      <div className={Styles.content}>
        <h2>
          Avatar <span>(2009)</span>
        </h2>
        <ReactStars size={20} half={true} value={5} edit={false} />
        <p>description</p>
      </div>
    </div>
  );
};

export default MovieDetail;
