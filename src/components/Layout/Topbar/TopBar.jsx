import React from "react";
import Logo from "../../../assets/icons/logo.svg";
import Menu from "../../../assets/icons/Menu.svg";
// import { useHistory } from "react-router-dom";
// import { getAuth, signOut } from "firebase/auth";
import styles from "./TopBar.module.css";

const TopBar = () => {
  // const auth = getAuth();
  // const history = useHistory();
  // const logOut = () => {
  //   signOut(auth).then(() => {
  //     history.push("/");
  //   });
  // };
  return (
    <div className={styles.Wrapper}>
      <img className={styles.menu} src={Menu} alt="Healse logo" />
      <img className={styles.logo} src={Logo} alt="Healse logo" />
      {/* {auth.currentUser ? <button onClick={logOut}>Logout</button> : null} */}
    </div>
  );
};

export default TopBar;
