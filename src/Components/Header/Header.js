import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Styles from "./Header.module.css";

const Header = () => {
  const [btnstate, setBtnState] = useState(true);
  const responsiveNav = () => {
    setBtnState(!btnstate);
  };

  const toggleClass = btnstate ? Styles.menu_type : Styles.responsive_menu_type;

  return (
    <div className={Styles.header}>
      <div className={Styles.header_left_side}>
        <span className={Styles.bar_menu}>
          <i
            className={`fa-solid ${btnstate ? "fa-bars" : "fa-times"}`}
            onClick={responsiveNav}
          ></i>
        </span>
        <NavLink to={"/"}>
          <h2 className={Styles.logo}>m</h2>
        </NavLink>
      </div>
      <div className={toggleClass}>
        <NavLink to={"/movietype/popular"}>
          <p className={Styles.type_movie}>Populor</p>
        </NavLink>
        <NavLink to={"/movietype/top_rated"}>
          <p className={Styles.type_movie}>Top Rated</p>
        </NavLink>
        <NavLink to={"/movietype/upcoming"}>
          <p className={Styles.type_movie}>Upcoming</p>
        </NavLink>
      </div>
      <NavLink to={"/watchList"}>
        <span className={Styles.watchlist_btn}>
          Watchlist <i class="fa-solid fa-arrow-right"></i>
        </span>
      </NavLink>
    </div>
  );
};

export default Header;
