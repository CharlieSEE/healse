import React from "react";
import "../css/TopBar.css";

const TopBar = ({ title, toggleSideMenu }) => {
  return (
    <div className="TopBarWrapper">
      <div onClick={toggleSideMenu}>icona</div>
      {title}
    </div>
  );
};

export default TopBar;
