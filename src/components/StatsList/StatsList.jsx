import React from "react";
import StatsListElement from "./StatsListElement";

const StatsList = () => {
  return (
    <div>
      <StatsListElement name="Weight" icon="icon" change="change" value={82} />
      <StatsListElement name="BMI" icon="icon" change="change" value={26} />
      <StatsListElement
        name="Body Fat"
        icon="icon"
        change="change"
        value={19}
      />
      <StatsListElement
        name="Waist circumference"
        icon="icon"
        change="change"
        value={96}
      />
      <StatsListElement
        name="Hip circumference"
        icon="icon"
        change="change"
        value={91}
      />
      <StatsListElement
        name="Chest circumference"
        icon="icon"
        change="change"
        value={110}
      />
      <StatsListElement
        name="Thigh circumference"
        icon="icon"
        change="change"
        value={94}
      />
      <StatsListElement
        name="Biceps circumference"
        icon="icon"
        change="change"
        value={37}
      />
    </div>
  );
};

export default StatsList;
