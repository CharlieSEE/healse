import React, { useState } from "react";
import TopBar from "./Topbar/TopBar";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(true);
  };
  return (
    <div>
      <TopBar title="Ww" toggleSideMenu={toggleDrawer} />
      {children}
    </div>
  );
};

export default Layout;
