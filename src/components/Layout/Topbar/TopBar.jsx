import React from "react";
import styles from "./TopBar.module.css";

const TopBar = ({ title, toggleSideMenu }) => {
  return (
    <div className={styles.Wrapper}>
      <div onClick={toggleSideMenu}>icona</div>
      {title}
    </div>
  );
};

export default TopBar;
