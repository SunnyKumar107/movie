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
      <NavLink to={"/addmovie"}>
        <p className={Styles.add_new_btn}>
          <span>+</span>Add New
        </p>
      </NavLink>
    </div>
  );
};

export default Header;
