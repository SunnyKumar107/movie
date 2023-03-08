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
      <NavLink to={"/"}>
        <h2 className={Styles.logo}>m</h2>
      </NavLink>
      <i
        class={`fa-solid ${btnstate ? "fa-bars" : "fa-times"}`}
        onClick={responsiveNav}
      ></i>
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
    </div>
  );
};

export default Header;
