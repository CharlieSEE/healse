import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import StatsList from "./StatsList/StatsList";
import "../css/DashboardPage.css";
import plusIcon from "../images/plus-icon.png";
import DataInputPanel from "./DataInputPanel";
import Chart from "./Chart";

const Dashboard = () => {
  const auth = getAuth();
  const history = useHistory();
  const [inputOpen, setInputOpen] = useState(false);

  const handleToggleInsertMenu = () => {
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
        <Chart />
      </div>
      <div className="sectionWrapper">
        <StatsList />
        <button onClick={logOut}>Logout</button>
      </div>
      <button className="plusIconWrapper" onClick={handleToggleInsertMenu}>
        <img src={plusIcon} alt="plus sign" />
      </button>
      <DataInputPanel isOpen={inputOpen} />
    </div>
  );
};

export default Dashboard;
