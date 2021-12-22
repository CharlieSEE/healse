import React from "react";

const DataInputPanel = ({ isOpen }) => {
  return (
    <div>
      <ul className={`inputList ${isOpen ? "showInput" : ""}`}>
        <li>
          <span>Weight:</span>
          <input
            type="text"
            className="measurementInputField"
            placeholder="kg"
          />
        </li>
        <li>
          <span>Waist:</span>
          <input
            type="text"
            className="measurementInputField"
            placeholder="cm"
          />
        </li>
        <li>
          <span>Hip:</span>
          <input
            type="text"
            className="measurementInputField"
            placeholder="cm"
          />
        </li>
        <li>
          <span>Chest:</span>
          <input
            type="text"
            className="measurementInputField"
            placeholder="cm"
          />
        </li>
        <li>
          <span>Thigh:</span>
          <input
            type="text"
            className="measurementInputField"
            placeholder="cm"
          />
        </li>
        <li>
          <span>Biceps:</span>
          <input
            type="text"
            className="measurementInputField"
            placeholder="cm"
          />
        </li>
      </ul>
    </div>
  );
};

export default DataInputPanel;
