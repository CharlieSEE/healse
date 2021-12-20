import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import StatsList from "./StatsList/StatsList";
import "../css/DashboardPage.css";
import plusIcon from '../images/plus-icon.png'

const Dashboard = () => {
  const auth = getAuth();
  const history = useHistory();
  const [inputOpen, setInputOpen] = useState(false);
  const handleToggle = () => {
    setInputOpen(!inputOpen);
  }
  const logOut = () => {
    signOut(auth).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="dashboardPage">
      <div className="sectionWrapper">
        <p>chart placeholder</p>
      </div>
      <div className="sectionWrapper">
        <StatsList />
        <button onClick={logOut}>Logout</button>
      </div>
      <button className="plusIconWrapper" onClick={handleToggle}>
        {inputOpen ? "Close" : "Open"}
        <img src={plusIcon} alt="plus sign" />
      </button>
      <ul className={`inputList ${inputOpen ? "showInput" : ""}`}>
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

export default Dashboard;
