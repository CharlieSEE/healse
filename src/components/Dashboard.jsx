import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import StatsList from "./StatsList/StatsList";
import plusIcon from "../images/plus-icon.png";
import DataInputPanel from "./DataInputPanel";
import Chart from "./Chart";
import SectionWrapper from "./SectionWrapper";
import DashboardButton from "./DashboardButton";
import "../css/DashboardPage.css";

const Dashboard = () => {
  const auth = getAuth();
  const history = useHistory();
  const [inputOpen, setInputOpen] = useState(false);
  const [date, setDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const currentDate = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
    setDate(currentDate);
  }, []);

  const handleToggleInsertMenu = () => {
    setInputOpen(!inputOpen);
  };
  const logOut = () => {
    signOut(auth).then(() => {
      history.push("/");
    });
  };
  const addData = async (data) => {
    handleToggleInsertMenu();
    const db = getFirestore();
    // TODO BMI and bodyfat calc
    // const bmi = (weight / ((height*height)/10000)).toFixed(2);
    const factorOne = data.Weight * 1.082 + 94.42;
    const factorTwo = data.Waist * 4.15;
    const leanBodyMass = factorOne - factorTwo;
    const bodyFatWeight = data.Weight - leanBodyMass;
    data.BodyFat = Math.floor((bodyFatWeight * 100) / data.Weight);
    //! TMP. DELETE
    data.BMI = 20;
    await setDoc(doc(db, "users", auth.currentUser.uid, "mes", date), data);
    alert("Data added");
    console.log(data);
  };

  return (
    <div className="dashboardPage">
      <SectionWrapper>
        <h1>{date}</h1>
      </SectionWrapper>
      {inputOpen ? <DataInputPanel onSave={addData} /> : null}
      <SectionWrapper>
        <Chart />
      </SectionWrapper>
      <SectionWrapper>
        <StatsList date={date} />
        <button onClick={logOut}>Logout</button>
      </SectionWrapper>
      {inputOpen ? null : (
        <DashboardButton
          icon={plusIcon}
          altText="plus sign"
          action={handleToggleInsertMenu}
        />
      )}
    </div>
  );
};

export default Dashboard;
