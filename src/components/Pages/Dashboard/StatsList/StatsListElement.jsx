import React from "react";
import "./css/StatsListElement.css";

const StatsListElement = ({ icon, name, change, value }) => {
  return (
    <div className="statsListElementWrapper">
      <div className="icon">{icon}</div>
      <div className="statName">{name}</div>
      <div className="statChange">{change}</div>
      <div className="statValue">{value}</div>
    </div>
  );
};

export default StatsListElement;
