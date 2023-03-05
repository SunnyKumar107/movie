import React, { useState } from "react";
import Styles from "./AddMovie.module.css";
import ReactStars from "react-stars";

const AddMovie = () => {
  const [form, setForm] = useState({
    title: "",
    release_date: "",
    poster_path: "",
    overview: "",
    rating: "",
  });
  const newMovie = {
    id: Math.floor(Math.random() * 1000000) + 100000,
    title: form.title,
    release_date: form.release_date,
    poster_path: form.poster_path,
    overview: form.overview,
    vote_average: form.rating,
  };
  const submitHandler = () => {
    setForm({
      title: "",
      release_date: "",
      poster_path: "",
      overview: "",
      rating: "",
    });
  };

  return (
    <div className={Styles.add_movie}>
      <h2 className={Styles.heading}>Add New Movie</h2>
      <form>
        <div className={Styles.movie_info}>
          <label>
            <span>Title</span>
            <input
              type="text"
              placeholder="Enter Movie Name"
              className={Styles.title_year}
              value={form.title}
              onChange={(e) => setForm({ title: e.target.value })}
            />
          </label>
          <label>
            <span>Release-Date</span>
            <input
              type="date"
              className={Styles.title_year}
              value={form.release_date}
              onChange={(e) => setForm({ release_date: e.target.value })}
            />
          </label>
        </div>

        <label>
          <span>Poster</span>
          <input
            type="text"
            placeholder="Enter Image Link"
            value={form.poster_path}
            onChange={(e) => setForm({ poster_path: e.target.value })}
          />
        </label>
        <label>
          <span>Description</span>
          <textarea
            name="Description"
            placeholder="Enter Movie Description..."
            value={form.overview}
            onChange={(e) => setForm({ overview: e.target.value })}
          ></textarea>
        </label>
        <span>Rating :</span>
        <ReactStars
          size={30}
          edit={true}
          half={true}
          value={form.rating}
          onChange={(e) => setForm({ rating: e.target.value })}
        />
      </form>

      <button className={Styles.btn} onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
};

export default AddMovie;
