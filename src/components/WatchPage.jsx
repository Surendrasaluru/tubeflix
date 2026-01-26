import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { APIKEY } from "../utils/constants";

const WatchPage = () => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const [videoData, setVideoData] = useState([]);
  const SINGLE_VIDEO_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
    searchParams.get("v") +
    "&key=" +
    APIKEY;

  useEffect(() => {
    const getVideoData = async () => {
      try {
        const data = await fetch(SINGLE_VIDEO_API);

        const json = await data.json();
        setVideoData(json.items[0]);
        console.log(json.items[0]);
      } catch (error) {
        console.error("failed to fetch video data", error);
      }
    };
    getVideoData();
  }, []);

  if (videoData.length === 0) return <h2>Video is on the way</h2>;

  const { snippet, statistics } = videoData;
  const { channelTitle, title, description } = snippet;
  const { likeCount } = statistics;

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-4 md:p-8 col-span-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Main Video Column */}
        <div className="flex-1">
          {/* Video Wrapper with 16:9 Aspect Ratio */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video Metadata */}
          <div className="mt-4">
            <h1 className="text-xl md:text-2xl font-bold line-clamp-2">
              {title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-tr from-gray-700 to-gray-500" />
                <div>
                  <p className="font-semibold text-base">{channelTitle}</p>
                  <p className="text-sm text-gray-400">1.2M subscribers</p>
                </div>
                <button className="ml-4 bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
                  Subscribe
                </button>
              </div>

              <div className="flex items-center space-x-2 bg-[#272727] p-1 rounded-full">
                <button className="px-4 py-1.5 hover:bg-[#3f3f3f] rounded-l-full border-r border-gray-600 transition-colors">
                  👍 {likeCount}
                </button>
                <button className="px-4 py-1.5 hover:bg-[#3f3f3f] rounded-r-full transition-colors">
                  👎
                </button>
              </div>
              <div
                className="mt-4 p-3 bg-[#272727] rounded-xl hover:bg-[#3f3f3f] cursor-pointer transition-colors duration-200"
                onClick={() =>
                  !isDescriptionExpanded && setIsDescriptionExpanded(true)
                }
              >
                <div
                  className={`text-sm whitespace-pre-wrap wrap-break-word ${!isDescriptionExpanded ? "line-clamp-2" : ""}`}
                >
                  {description}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents the parent div from re-triggering the "expand"
                    setIsDescriptionExpanded(!isDescriptionExpanded);
                  }}
                  className="font-bold text-sm mt-1 text-gray-300 hover:text-white"
                >
                  {isDescriptionExpanded ? "Show less" : "...more"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Space (Optional) */}
      </div>
    </div>
  );
};

export default WatchPage;
