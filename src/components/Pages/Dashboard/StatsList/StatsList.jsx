import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import StatsListElement from "./StatsListElement";

// Icons
import ThighIcon from "../../../../assets/icons/Thigh.svg";
import BicepsIcon from "../../../../assets/icons/Biceps.svg";
import BMIIcon from "../../../../assets/icons/BMI.svg";
import BodyFatIcon from "../../../../assets/icons/Body_fat.svg";
import ChestIcon from "../../../../assets/icons/Chest.svg";
import HipIcon from "../../../../assets/icons/Hip.svg";
import WaistIcon from "../../../../assets/icons/Waist.svg";
import WeightIcon from "../../../../assets/icons/Weight.svg";

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
        icon={WeightIcon}
        value={data.Weight}
        altText="Weight icon"
        unit="kg"
      />
      <StatsListElement
        name="BMI"
        icon={BMIIcon}
        value={data.BMI}
        altText="BMI icon"
        unit=""
      />
      <StatsListElement
        name="Body Fat"
        icon={BodyFatIcon}
        value={data.BodyFat}
        altText="Body Fat icon"
        unit="%"
      />
      <StatsListElement
        name="Waist circumference"
        icon={WaistIcon}
        value={data.Waist}
        altText="Waist circumference icon"
        unit="cm"
      />
      <StatsListElement
        name="Hip circumference"
        icon={HipIcon}
        value={data.Hip}
        altText="Hip circumference icon"
        unit="cm"
      />
      <StatsListElement
        name="Chest circumference"
        icon={ChestIcon}
        value={data.Chest}
        altText="Chest circumference icon"
        unit="cm"
      />
      <StatsListElement
        name="Thigh circumference"
        icon={ThighIcon}
        value={data.Thigh}
        altText="Thigh circumference icon"
        unit="cm"
      />
      <StatsListElement
        name="Biceps circumference"
        icon={BicepsIcon}
        value={data.Biceps}
        altText="Biceps circumference icon"
        unit="cm"
      />
    </>
  );
};

export default StatsList;
