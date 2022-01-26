import React from "react";
import TopBar from "./Topbar/TopBar";

const Layout = ({ children }) => {
  return (
    <div>
      <TopBar />
      {children}
    </div>
  );
};

export default Layout;
