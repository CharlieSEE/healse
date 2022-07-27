import React, { useState } from "react";
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   GoogleAuthProvider,
// } from "firebase/auth";
import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  browserLocalPersistence,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styles from "./LogInPage.module.css";

function LogInPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const auth = getAuth();
  let navigate = useNavigate();

  // const provider = new GoogleAuthProvider();
  const login = (e) => {
    e.preventDefault();
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        signInWithEmailAndPassword(auth, userEmail, userPassword)
          .then(() => {
            navigate("/dashboard");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`${errorCode} ${errorMessage}`);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`);
      });
  };
  // const googleLogin = (e) => {
  //   e.preventDefault();
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       console.log(result);
  //       history.push("/dashboard");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.error(`${errorCode} ${errorMessage}`);
  //     });
  // };
  return (
    <div className={styles.logInPage}>
      <div className={styles.logInWrapper}>
        <h1 className={styles.logInTitle}>
          <div>Log into your</div>
          <div>
            <span className={styles.blueText}> Healse </span>
            Account
          </div>
        </h1>

        <form className={styles.logInForm} onSubmit={login}>
          <input
            type="email"
            className={styles.logInInputField}
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
            placeholder="Email"
          />
          <input
            type="password"
            className={styles.logInInputField}
            onChange={(e) => setUserPassword(e.target.value)}
            value={userPassword}
            placeholder="Password"
          />
          <input type="submit" value="Log in" />
        </form>
      </div>      {/* <button className={styles.loginProviderButton} onClick={googleLogin}>
                     <span>
                     Login with <b>Google</b>
                     </span>
                     </button> */}
    </div>
  );
}

export default LogInPage;
