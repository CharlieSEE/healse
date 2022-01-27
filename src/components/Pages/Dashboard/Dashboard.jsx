import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { doc, setDoc, getDoc, getFirestore } from "firebase/firestore";

import Chart from "./Chart/Chart";
import StatsList from "./StatsList/StatsList";
import plusIcon from "../../../assets/icons/plus.svg";
import leftArrow from "../../../assets/icons/arrow_left.svg";
import rightArrow from "../../../assets/icons/arrow_right.svg";
import DataInputPanel from "./DataInputPanel/DataInputPanel";
import SectionWrapper from "./SectionWrapper/SectionWrapper";
import DashboardButton from "./DashboardButton/DashboardButton";

import styles from "./DashboardPage.module.css";

const Dashboard = () => {
  const [inputOpen, setInputOpen] = useState(false);
  const [date, setDate] = useState("");
  const [displayDate, setDisplayDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const displayDate = date;
    setDisplayDate(displayDate);
    const currentDate = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
    setDate(currentDate);
  }, []);

  const handleToggleInsertMenu = () => {
    setInputOpen(!inputOpen);
  };

  const addData = async (data) => {
    handleToggleInsertMenu();
    const auth = getAuth();
    const user = auth.currentUser;
    const db = getFirestore();
    let height = 0;
    let age = 0;
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      height = docSnap.data().Height;
      age = docSnap.data().Age;
    }
    data.BMI = (data.Weight / ((height * height) / 10000)).toFixed(2);
    data.BodyFat = (1.2 * data.BMI + 0.23 * age - 16.2).toFixed(1);
    await setDoc(doc(db, "users", auth.currentUser.uid, "mes", date), data);
    alert("Data added");
  };
  const dateForwards = () => {
    let dayms = 86400000;
    let forwardDate = displayDate;
    forwardDate.setTime(forwardDate.getTime() + dayms);
    setDisplayDate(forwardDate);
    let days = parseInt(displayDate.getDate());
    let months = parseInt(displayDate.getMonth() + 1);
    let years = parseInt(displayDate.getFullYear());

    setDate(`${days}-${months}-${years}`);
  };
  const dateBackwards = () => {
    let dayms = 86400000;
    let forwardDate = displayDate;
    forwardDate.setTime(forwardDate.getTime() - dayms);
    setDisplayDate(forwardDate);
    let days = parseInt(displayDate.getDate());
    let months = parseInt(displayDate.getMonth() + 1);
    let years = parseInt(displayDate.getFullYear());
    setDate(`${days}-${months}-${years}`);
  };

  const cancelInput = () => {
    handleToggleInsertMenu();
  };

  return (
    <div className={styles.dashboardPage}>
      <SectionWrapper>
        <h1>{`🕒${date}🕒`}</h1>
      </SectionWrapper>
      {inputOpen ? (
        <DataInputPanel onSave={addData} onCancel={cancelInput} />
      ) : null}
      <SectionWrapper>
        <Chart date={date} />
      </SectionWrapper>
      <SectionWrapper>
        <StatsList date={date} />
      </SectionWrapper>
      {inputOpen ? null : (
        <>
          <DashboardButton
            icon={plusIcon}
            altText="plus sign"
            action={handleToggleInsertMenu}
          />
          <DashboardButton
            icon={rightArrow}
            altText="right arrow"
            action={dateForwards}
            style={{ right: "6em", bottom: "1em" }}
          />
          <DashboardButton
            icon={leftArrow}
            altText="left arrow"
            action={dateBackwards}
            style={{ right: "11em", bottom: "1em" }}
          />
        </>
      )}
    </div>
  );
};

export default Dashboard;
