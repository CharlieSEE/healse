import React from "react";
import Logo from "../../../assets/icons/Logo.svg";
import Menu from "../../../assets/icons/Menu.svg";
import styles from "./TopBar.module.css";

const TopBar = () => {
  return (
    <div className={styles.Wrapper}>
      <img className={styles.menu} src={Menu} alt="Healse logo" />
      <img className={styles.logo} src={Logo} alt="Healse logo" />
    </div>
  );
};

export default TopBar;
