import React from "react";

import VideoContainer from "./VideoContainer";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="grid grid-flow-col m-2 p-3">
      <Sidebar />

      <VideoContainer />
    </div>
  );
};

export default Body;
