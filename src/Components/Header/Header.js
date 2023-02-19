import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h2 className="logo">
        <span>m</span>ovie
      </h2>
      <p className="add_new_btn">
        <span>+</span>Add New
      </p>
    </div>
  );
};

export default Header;
