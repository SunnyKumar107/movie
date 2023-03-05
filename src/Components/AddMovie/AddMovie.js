import React, { useState } from "react";
import Styles from "./AddMovie.module.css";
import movies from "../movies.json";

const AddMovie = () => {
  const [form, setForm] = useState({
    Title: "",
    Year: "",
    Poster: "",
    Description: "",
  });

  const [movieCollection, setMovieCollection] = useState(movies);

  const submitHandler = () => {
    if (
      form.Title === "" ||
      form.Year === "" ||
      form.Poster === "" ||
      form.Description === ""
    ) {
      window.alert("Input field is blank !!");
    } else {
      const newMovie = {
        ID: movieCollection.length + 1,
        Title: form.Title,
        Year: form.Year,
        Poster: form.Poster,
        Description: form.Description,
        Rating: Math.floor(Math.random() * 5) + 1,
      };
      const jData = JSON.stringify(newMovie);
      setMovieCollection(movieCollection.concat(jData));
    }
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
              value={form.Title}
              onChange={(e) => setForm({ Title: e.target.value })}
            />
          </label>
          <label>
            <span>Year</span>
            <input
              type="number"
              placeholder="Enter Year"
              className={Styles.title_year}
              value={form.Year}
              onChange={(e) => setForm({ Year: e.target.value })}
            />
          </label>
        </div>

        <label>
          <span>Poster</span>
          <input
            type="text"
            placeholder="Enter Image Link"
            value={form.Poster}
            onChange={(e) => setForm({ Poster: e.target.value })}
          />
        </label>
        <label>
          <span>Description</span>
          <textarea
            name="Description"
            placeholder="Enter Movie Description..."
            value={form.Description}
            onChange={(e) => setForm({ Description: e.target.value })}
          ></textarea>
        </label>
      </form>
      <button className={Styles.btn} onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
};

export default AddMovie;
