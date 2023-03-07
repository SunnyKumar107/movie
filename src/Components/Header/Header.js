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
      <NavLink to={"/watchlist"}>
        <p className={Styles.add_new_btn}>Watchlist</p>
      </NavLink>
    </div>
  );
};

export default Header;
