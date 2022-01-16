import React from "react";
import styles from "./SectionWrapper.module.css";

const SectionWrapper = ({ children }) => {
  return <div className={styles.sectionWrapper}>{children}</div>;
};

export default SectionWrapper;
