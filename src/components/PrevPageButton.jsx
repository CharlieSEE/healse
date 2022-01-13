import React from "react";
import styles from "../css/PrevPageButton.module.css";

const PrevPageButton = ({ icon, action, altText }) => {
  return (
    <buttin className={styles.buttonWrapper} onClick={action}>
      <img className={styles.icon} src={icon} alt={altText} />
    </buttin>
  );
};

export default PrevPageButton;
