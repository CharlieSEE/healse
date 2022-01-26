import React from "react";
import styles from "./StatsListElement.module.css";

const StatsListElement = ({ icon, name, value, altText, unit }) => {
  return (
    <div className={styles.statsListElementWrapper}>
      <img className={styles.icon} src={icon} alt={altText} />
      <div className={styles.statName}>{name}</div>
      <div className={styles.statValue}>{`${value} ${unit}`}</div>
    </div>
  );
};

export default StatsListElement;
