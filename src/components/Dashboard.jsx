import React from "react";
import { useHistory } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import StatsList from "./StatsList/StatsList";
import "../css/DashboardPage.css";

const Dashboard = () => {
  const auth = getAuth();
  const history = useHistory();
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
    </div>
  );
};

export default Dashboard;
