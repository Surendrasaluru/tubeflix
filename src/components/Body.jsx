import React from "react";

import VideoContainer from "./VideoContainer";
import Sidebar from "./Sidebar";
import WatchPage from "./WatchPage";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col m-2 p-3">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
