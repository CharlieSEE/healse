import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import StatsList from "./StatsList/StatsList";
import plusIcon from "../images/plus-icon.png";
import DataInputPanel from "./DataInputPanel";
import Chart from "./Chart";
import "../css/DashboardPage.css";
import SectionWrapper from "./SectionWrapper";

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
      {inputOpen ? <DataInputPanel /> : null}
      <SectionWrapper>
        <Chart />
      </SectionWrapper>
      <SectionWrapper>
        <StatsList />
        <button onClick={logOut}>Logout</button>
      </SectionWrapper>
      <button className="plusIconWrapper" onClick={handleToggleInsertMenu}>
        <img src={plusIcon} alt="plus sign" />
      </button>
    </div>
  );
};

export default Dashboard;
