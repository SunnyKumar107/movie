import React from "react";
import MovieCard from "../movieCard/MovieCard";
import "./Movies.css";

const Movies = () => {
  const card = [
    {
      ID: "c1",
      Title: "Avatar",
      Rating: 4.5,
      Year: 2009,
      Poster:
        "https://i.pinimg.com/originals/f3/f0/4a/f3f04a485eaad60915d70bb3df8e6440.jpg",
    },
    {
      ID: "c2",
      Title: "Venom",
      Rating: 4.2,
      Year: 2017,
      Poster:
        "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/venom_onesheet_1400x2100_rated.png?itok=0tO6umMg",
    },
    {
      ID: "c3",
      Title: "Hex",
      Rating: 4,
      Year: 2020,
      Poster:
        "https://www.dvdsreleasedates.com/posters/800/H/Hex-2018-movie-poster.jpg",
    },
    {
      ID: "c4",
      Title: "Spider-man",
      Rating: 4.3,
      Year: 2002,
      Poster:
        "https://www.themoviedb.org/t/p/original/ynyDOCwNuYqqR6p1d6Nbk7ehpfv.jpg",
    },
  ];

  return (
    <div className="Movies">
      {card.map((e) => (
        <MovieCard
          title={e.Title}
          rating={e.Rating}
          year={e.Year}
          poster={e.Poster}
        />
      ))}
    </div>
  );
};

export default Movies;
