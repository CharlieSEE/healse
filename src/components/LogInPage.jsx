import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";
import "../css/LogInPage.css";

const LogInPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const auth = getAuth();
  const history = useHistory();
  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then(() => {
        history.push("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`${errorCode} ${errorMessage}`);
      });
  };

  return (
    <div className="logInPage">
      <h1 className="logInTitle">
        <div>
          Log into your
        </div>
        <div>
          <span className="blueText"> Healse </span>
          Account
        </div>
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
