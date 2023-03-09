import Styles from "./ChangePage.module.css";
import React from "react";

const ChangePage = (props) => {
  const page = props.page;

  const decraesePage = () => {
    props.prevPage(page - 1);
  };
  const increasePage = () => {
    props.nextPage(page + 1);
  };

  return (
    <div className={Styles.changePage}>
      {page === 1 ? null : (
        <button className={Styles.slide_btn} onClick={decraesePage}>
          <i class="fa-solid fa-angle-left"></i> Prev
        </button>
      )}
      <p>page: {page}</p>
      <button className={Styles.slide_btn} onClick={increasePage}>
        Next <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};

export default ChangePage;
