import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Movies from "./Components/Movies/Movies";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Movies />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
