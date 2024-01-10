import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Styles from "./Header.module.css";

const Header = () => {
  const [btnstate, setBtnState] = useState(true);
  const [watchListState, setWatchListState] = useState(true);
  const responsiveNav = () => {
    setBtnState(!btnstate);
  };

  const WatchlistBtnHandler = () => {
    setWatchListState(!watchListState);
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
      {watchListState ? (
        <NavLink to={"/watchList"}>
          <span className={Styles.watchlist_btn} onClick={WatchlistBtnHandler}>
            Watchlist <i class="fa-solid fa-arrow-right"></i>
          </span>
        </NavLink>
      ) : (
        <NavLink to={"/"}>
          <span className={Styles.home_btn} onClick={WatchlistBtnHandler}>
            <i class="fa-solid fa-arrow-left"></i> Home
          </span>
        </NavLink>
      )}
    </div>
  );
};

export default Header;
