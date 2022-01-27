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
import NextPageButton from "./NextPageButton/NextPageButton";
import PrevPageButton from "./PrevPageButton/PrevPageButton";

import styles from "./DashboardPage.module.css";

const Dashboard = () => {
  const [inputOpen, setInputOpen] = useState(false);
  const [date, setDate] = useState("");
  let [displayDate, setDisplayDate] = useState("");


  useEffect(() => {
    const date = new Date();
    let displayDate = date;
    setDisplayDate(displayDate);
    const currentDate = `${date.getDate()}-${date.getMonth() + 1
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
    // const factorOne = parseInt(data.Weight) * 1.082 + 94.42;
    // const factorTwo = parseInt(data.Waist) * 4.15;
    // const leanBodyMass = factorOne - factorTwo;
    // const bodyFatWeight = parseInt(data.Weight) - leanBodyMass;
    // data.BodyFat = ((bodyFatWeight * 100) / parseInt(data.Weight)).toFixed(1);
    // console.log((bodyFatWeight * 100) / parseInt(data.Weight));

    // Getting height
    let height = 0;
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      height = docSnap.data().Height;
    }
    data.BMI = (data.Weight / ((height * height) / 10000)).toFixed(2);
    //! Need to add getting age from db
    data.BodyFat = (1.2 * data.BMI + 0.23 * 21 - 16.2).toFixed(1);
    await setDoc(doc(db, "users", auth.currentUser.uid, "mes", date), data);
    alert("Data added");
  };
  const dateForwards = () => {
    let dayms = 86400000;
    let forwardDate = displayDate;
    forwardDate.setTime(forwardDate.getTime() + dayms);
    setDisplayDate = forwardDate;
    let days = parseInt(displayDate.getDate());
    let months = parseInt(displayDate.getMonth() + 1);
    let years = parseInt(displayDate.getFullYear());

    setDate(`${days}-${months}-${years}`);
  };
  const dateBackwards = () => {
    let dayms = 86400000;
    let forwardDate = displayDate;
    forwardDate.setTime(forwardDate.getTime() - dayms);
    setDisplayDate = forwardDate;
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
          <NextPageButton
            icon={rightArrow}
            altText="right arrow"
            action={dateForwards}
          />
          <PrevPageButton
            icon={leftArrow}
            altText="left arrow"
            action={dateBackwards}
          />
        </>
      )}
    </div>
  );
};

export default Dashboard;
