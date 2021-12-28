import React, { useState } from "react";
import "../css/DataInputPanel.css";
import DashboardButton from "./DashboardButton";

const DataInputPanel = ({ onSave }) => {
  const [weight, setWeight] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [chest, setChest] = useState("");
  const [thigh, setThigh] = useState("");
  const [biceps, setBiceps] = useState("");

  const getInput = () => {
    const data = {
      weight: weight,
      waist: waist,
      hip: hip,
      chest: chest,
      thigh: thigh,
      biceps: biceps,
    };
    onSave(data);
  };

  return (
    <>
      <div className="inputList">
        <div>Weight:</div>
        <input
          type="number"
          className="measurementInputField"
          placeholder="kg"
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
        />
        <div>Waist:</div>
        <input
          type="number"
          className="measurementInputField"
          placeholder="cm"
          onChange={(e) => setWaist(e.target.value)}
          value={waist}
        />
        <div>Hip:</div>
        <input
          type="number"
          className="measurementInputField"
          placeholder="cm"
          onChange={(e) => setHip(e.target.value)}
          value={hip}
        />
        <div>Chest:</div>
        <input
          type="number"
          className="measurementInputField"
          placeholder="cm"
          onChange={(e) => setChest(e.target.value)}
          value={chest}
        />
        <div>Thigh:</div>
        <input
          type="number"
          className="measurementInputField"
          placeholder="cm"
          onChange={(e) => setThigh(e.target.value)}
          value={thigh}
        />
        <div>Biceps:</div>
        <input
          type="number"
          className="measurementInputField"
          placeholder="cm"
          onChange={(e) => setBiceps(e.target.value)}
          value={biceps}
        />
      </div>
      <DashboardButton action={getInput} />
    </>
  );
};

export default DataInputPanel;
