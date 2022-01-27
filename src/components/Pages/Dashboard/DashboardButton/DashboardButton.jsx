import React from "react";
import styles from "./DashboardButton.module.css";

const DashboardButton = ({ icon, action, altText, ...props }) => {
  return (
    <div className={styles.wrapper} onClick={action} {...props}>
      <img src={icon} alt={altText} />
    </div>
  );
};

export default DashboardButton;
