import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useHistory } from "react-router-dom";
import "../css/LogInPage.css";

function LogInPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const auth = getAuth();
  const history = useHistory();
  const provider = new GoogleAuthProvider();
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
  const googleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        history.push("/dashboard");
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`${errorCode} ${errorMessage}`);
      });
  }
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
          placeholder="Email" />
        <input
          type="password"
          className="logInInputField"
          onChange={(e) => setUserPassword(e.target.value)}
          value={userPassword}
          placeholder="Password" />
        <input type="submit" value="Log in" />
      </form>
      <button className="login-provider-button" onClick={googleLogin}>
        {/* <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon" /> */}
        <span> Login with <b>Google</b></span>
      </button>
    </div>
  );
}

export default LogInPage;
