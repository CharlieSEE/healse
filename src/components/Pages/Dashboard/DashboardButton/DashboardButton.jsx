import React from "react";
import styles from "./DashboardButton.module.css";

const DashboardButton = ({ icon, action, altText, ...props }) => {
  return (
    <div className={styles.plusIconWrapper} onClick={action} {...props}>
      <img className={styles.plusIconWrapperIcon} src={icon} alt={altText} />
    </div>
  );
};

export default DashboardButton;
