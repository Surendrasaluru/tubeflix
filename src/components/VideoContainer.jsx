import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { VIDEOAPI } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await fetch(VIDEOAPI);
        const json = await data.json();
        console.log(json.items);
        setVideos(json.items);
      } catch (error) {
        console.error("failed to fetch", error);
      }
    };
    getVideos();
  }, []);

  if (videos.length == 0) return <h1>Loading....</h1>;

  return (
    <div className="col-span-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {videos.map((video) => (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard info={video} key={video.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
