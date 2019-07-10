import React from "react";
import MainFeed from "./MainFeed";
import Sidebar from "./Sidebar";

function Dashboard() {
  var dashboardStyles = {
    display: "flex",
    justifyContent: "space-between",
    width: "70%",
    margin: "0 auto"
  };
  var mainStyles = {
    flexBasis: "70%"
  };
  var asideStyles = {
    flexBasis: "30%"
  };
  return (
    <div style={dashboardStyles}>
      <div style={mainStyles}>
        <MainFeed />
      </div>
      <div style={asideStyles}>
        <Sidebar />
      </div>
    </div>
  );
}

export default Dashboard;
