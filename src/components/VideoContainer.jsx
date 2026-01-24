import React from "react";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  return (
    <div className="col-span-11 flex gap-4">
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
};

export default VideoContainer;
