import React from "react";
import styles from "./NextPageButton.module.css";

const NextPageButton = ({ icon, action, altText }) => {
  return (
    <div className={styles.buttonWrapper} onClick={action}>
      <img className={styles.icon} src={icon} alt={altText} />
    </div>
  );
};

export default NextPageButton;
