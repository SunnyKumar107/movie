import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddMovie from "./Components/AddMovie/AddMovie";
import Header from "./Components/Header/Header";
import Movies from "./Components/Movies/Movies";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/addmovie" element={<AddMovie />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
