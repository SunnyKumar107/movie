import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={Styles.header}>
      <NavLink to={"/"}>
        <h2 className={Styles.logo}>
          <span>m</span>ovie
        </h2>
      </NavLink>
      <div className={Styles.menu}>
        <NavLink to={"/movietype/popular"}>
          <p>Populor</p>
        </NavLink>
        <NavLink to={"/movietype/top_rated"}>
          <p>Top Rated</p>
        </NavLink>
        <NavLink to={"/movietype/upcoming"}>
          <p>Upcoming</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
