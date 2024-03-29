import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
import Movies from "./Components/Movies/Movies";
import MovieType from "./Components/MovieType/MovieType";
import WatchList from "./Components/WatchList/WatchList";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/moviedetail/:title" element={<MovieDetail />} />
          <Route path="/movietype/:movieType" element={<MovieType />} />
          <Route path="watchList" element={<WatchList />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
