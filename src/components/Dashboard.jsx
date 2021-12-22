import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import StatsList from "./StatsList/StatsList";
import "../css/DashboardPage.css";
import plusIcon from "../images/plus-icon.png";
import DataInputPanel from "./DataInputPanel";

const Dashboard = () => {
  const auth = getAuth();
  const history = useHistory();
  const [inputOpen, setInputOpen] = useState(false);

  const handleToggle = () => {
    setInputOpen(!inputOpen);
  };
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
        <img src={plusIcon} alt="plus sign" />
      </button>
      <DataInputPanel isOpen={inputOpen} />
    </div>
  );
};

export default Dashboard;
