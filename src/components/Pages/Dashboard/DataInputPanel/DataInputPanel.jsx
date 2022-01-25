import React, { useState } from "react";
import DashboardButton from "../DashboardButton/DashboardButton";
import styles from "./DataInputPanel.module.css";
import plusIcon from "../../../../assets/icons/plus.svg"

const DataInputPanel = ({ onSave }) => {
  const [weight, setWeight] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [chest, setChest] = useState("");
  const [thigh, setThigh] = useState("");
  const [biceps, setBiceps] = useState("");

  const getInput = () => {
    const data = {
      Weight: weight,
      Waist: waist,
      Hip: hip,
      Chest: chest,
      Thigh: thigh,
      Biceps: biceps,
    };
    onSave(data);
  };

  return (
    <>
      <div className={styles.inputList}>
        <div>Weight:</div>
        <input
          type="number"
          className={styles.measurementInputField}
          placeholder="kg"
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
        />
        <div>Waist:</div>
        <input
          type="number"
          className={styles.measurementInputField}
          placeholder="cm"
          onChange={(e) => setWaist(e.target.value)}
          value={waist}
        />
        <div>Hip:</div>
        <input
          type="number"
          className={styles.measurementInputField}
          placeholder="cm"
          onChange={(e) => setHip(e.target.value)}
          value={hip}
        />
        <div>Chest:</div>
        <input
          type="number"
          className={styles.measurementInputField}
          placeholder="cm"
          onChange={(e) => setChest(e.target.value)}
          value={chest}
        />
        <div>Thigh:</div>
        <input
          type="number"
          className={styles.measurementInputField}
          placeholder="cm"
          onChange={(e) => setThigh(e.target.value)}
          value={thigh}
        />
        <div>Biceps:</div>
        <input
          type="number"
          className={styles.measurementInputField}
          placeholder="cm"
          onChange={(e) => setBiceps(e.target.value)}
          value={biceps}
        />
      </div>
      <DashboardButton
        icon={plusIcon}
        altText="plus sign"
        action={getInput}
      />
    </>
  );
};

export default DataInputPanel;
