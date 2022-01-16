import React from "react";
import styles from "../css/NextPageButton.module.css";

const NextPageButton = ({ icon, action, altText }) => {
  return (
    <buttin className={styles.buttonWrapper} onClick={action}>
      <img className={styles.icon} src={icon} alt={altText} />
    </buttin>
  );
};

export default NextPageButton;
