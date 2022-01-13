import React from "react";
import { useHistory } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

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
      <h1>Dashboard</h1>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};

export default Dashboard;
