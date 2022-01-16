import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import StatsListElement from "./StatsListElement";

const StatsList = ({ date }) => {
  const [data, setData] = useState({
    Weight: 0,
    BMI: 0,
    BodyFat: 0,
    Waist: 0,
    Hip: 0,
    Chest: 0,
    Thigh: 0,
    Biceps: 0,
  });
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    const db = getFirestore();
    const defaultDateObj = new Date();
    const defaultDate = `${defaultDateObj.getDate()}-${
      defaultDateObj.getMonth() + 1
    }-${defaultDateObj.getFullYear()}`;
    const currentDate = date || defaultDate;
    console.log(date);
    const fetchData = async () => {
      const docRef = doc(db, "users", user.uid, "mes", currentDate);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        setData({
          Weight: 0,
          BMI: 0,
          BodyFat: 0,
          Waist: 0,
          Hip: 0,
          Chest: 0,
          Thigh: 0,
          Biceps: 0,
        });
      }
    };
    fetchData();
  }, [date]);
  return (
    <>
      <StatsListElement
        name="Weight"
        icon="icon"
        change="change"
        value={data.Weight}
      />
      <StatsListElement
        name="BMI"
        icon="icon"
        change="change"
        value={data.BMI}
      />
      <StatsListElement
        name="Body Fat"
        icon="icon"
        change="change"
        value={data.BodyFat}
      />
      <StatsListElement
        name="Waist circumference"
        icon="icon"
        change="change"
        value={data.Waist}
      />
      <StatsListElement
        name="Hip circumference"
        icon="icon"
        change="change"
        value={data.Hip}
      />
      <StatsListElement
        name="Chest circumference"
        icon="icon"
        change="change"
        value={data.Chest}
      />
      <StatsListElement
        name="Thigh circumference"
        icon="icon"
        change="change"
        value={data.Thigh}
      />
      <StatsListElement
        name="Biceps circumference"
        icon="icon"
        change="change"
        value={data.Biceps}
      />
    </>
  );
};

export default StatsList;
