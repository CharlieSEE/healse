import React from "react";
import styles from "./StatsListElement.module.css";

const StatsListElement = ({ icon, name, change, value }) => {
  return (
    <div className={styles.statsListElementWrapper}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.statName}>{name}</div>
      <div className={styles.statChange}>{change}</div>
      <div className={styles.statValue}>{value}</div>
    </div>
  );
};

export default StatsListElement;
