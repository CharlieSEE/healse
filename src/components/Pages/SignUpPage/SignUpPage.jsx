import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirmation, setUserPasswordConfirmation] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userHeight, setUserHeight] = useState("");
  const [userGender, setUserGender] = useState("");
  const [wrongInput, setWrongInput] = useState(false);

  let navigate = useNavigate();

  const auth = getAuth();
  const validateData = (e) => {
    e.preventDefault();
    if (userPasswordConfirmation !== userPassword || userPassword.length < 6) {
      setWrongInput(true);
      return;
    }

    console.log(`${userEmail}, ${userName}, ${userPassword}`);
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        createUserWithEmailAndPassword(auth, userEmail, userPassword)
          .then(async () => {
            const user = auth.currentUser;
            user.displayName = userName;
            const db = getFirestore();
            const docRef = doc(db, "users", user.uid);
            const data = {
              Age: userAge,
              Height: userHeight,
              Genders: userGender,
            };
            await setDoc(docRef, data);
            navigate("/dashboard");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`${errorCode}, ${errorMessage}`);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`${errorCode} ${errorMessage}`);
      });
  };

  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpWrapper}>
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
          <input
            type="text"
            className={styles.signUpInputField}
            onChange={(e) => setUserHeight(e.target.value)}
            value={userHeight}
            placeholder="Height"
          />
          <input
            type="number"
            className={styles.signUpInputField}
            onChange={(e) => setUserAge(e.target.value)}
            value={userAge}
            placeholder="Age"
          />
          <select
            name="gender"
            value={userGender}
            onChange={(e) => setUserGender(e.target.value)}
            required
          >
            <option value="">Chose your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
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
    </div>
  );
};

export default SignUpPage;
