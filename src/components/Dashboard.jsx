import React from "react";
import { useHistory } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import StatsList from "./StatsList/StatsList";

const Dashboard = () => {
  const auth = getAuth();
  const history = useHistory();
  const logOut = () => {
    signOut(auth).then(() => {
      history.push("/");
    });
  };
  return (
    <div>
      <p>chart placeholder</p>
      <StatsList />
      <button onClick={logOut}>Logout</button>
    </div>
  );
};

export default Dashboard;
