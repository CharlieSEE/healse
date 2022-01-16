import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirmation, setUserPasswordConfirmation] = useState("");
  const [wrongInput, setWrongInput] = useState(false);

  const history = useHistory();
  const auth = getAuth();
  const validateData = (e) => {
    e.preventDefault();
    if (userPasswordConfirmation !== userPassword || userPassword.length < 6) {
      setWrongInput(true);
      return;
    }
    console.log(`${userEmail}, ${userName}, ${userPassword}`);
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then(() => {
        auth.currentUser.displayName = userName;
        history.push("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`${errorCode}, ${errorMessage}`);
      });
  };

  return (
    <div className={styles.signUpPage}>
      <h1 className={styles.signUpTitle}>
        <div>Create your</div>
        <div>
          <span className={styles.blueText}> Healse </span>
          Account
        </div>
      </h1>
      <form className={styles.signUpForm} onSubmit={validateData}>
        <input
          type="email"
          className={styles.signUpInputField}
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          placeholder="Email"
        />
        <input
          type="text"
          className={styles.signUpInputField}
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          placeholder="Name"
        />
        <input
          type="password"
          className={styles.signUpInputField}
          onChange={(e) => setUserPassword(e.target.value)}
          value={userPassword}
          placeholder="Password"
        />
        <input
          type="password"
          className={styles.confirmationField}
          onChange={(e) => setUserPasswordConfirmation(e.target.value)}
          value={userPasswordConfirmation}
          placeholder="Confirm"
        />
        {wrongInput ? (
          <div className={styles.confirmationInfo}>
            Use 8 or more characters with a mix of letters, numbers & symbols
          </div>
        ) : (
          <div className={styles.confirmationInfo}></div>
        )}
        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
};

export default SignUpPage;
