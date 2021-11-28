import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";
import "../css/LogInPage.css";

const LogInPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const firebase = useFirebase();

  const login = (e) => {
    e.preventDefault();
    firebase
      .login({
        email: userEmail,
        password: userPassword,
      })
      .then()
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="logInPage">
      <h1 className="logInTitle">
        Log into your
        <div>
          <p className="blueText">Healse</p>
        </div>
        Account
      </h1>

      <form className="logInForm" onSubmit={login}>
        <input
          type="email"
          className="logInInputField"
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          placeholder="Email"
        />
        <input
          type="password"
          className="logInInputField"
          onChange={(e) => setUserPassword(e.target.value)}
          value={userPassword}
          placeholder="Password"
        />
        <input type="submit" value="Log in" />
      </form>
    </div>
  );
};

export default LogInPage;
