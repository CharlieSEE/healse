import React from "react";
import styles from "./DashboardButton.module.css";

const DashboardButton = ({ icon, action, altText }) => {
  return (
    <div className={styles.plusIconWrapper} onClick={action}>
      <img className={styles.plusIconWrapperIcon} src={icon} alt={altText} />
    </div>
  );
};

export default DashboardButton;
