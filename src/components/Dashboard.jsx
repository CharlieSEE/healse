import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import StatsList from "./StatsList/StatsList";
import plusIcon from "../images/plus-icon.png";
import DataInputPanel from "./DataInputPanel";
import Chart from "./Chart";
import SectionWrapper from "./SectionWrapper";
import DashboardButton from "./DashboardButton";
import "../css/DashboardPage.css";

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
  const addData = async (data) => {
    handleToggleInsertMenu();
    console.log(data);
  };

  return (
    <div className="dashboardPage">
      {inputOpen ? <DataInputPanel onSave={addData} /> : null}
      <SectionWrapper>
        <Chart />
      </SectionWrapper>
      <SectionWrapper>
        <StatsList />
        <button onClick={logOut}>Logout</button>
      </SectionWrapper>
      {inputOpen ? null : (
        <DashboardButton
          icon={plusIcon}
          altText="plus sign"
          action={handleToggleInsertMenu}
        />
      )}
    </div>
  );
};

export default Dashboard;
