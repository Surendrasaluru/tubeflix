import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { APIKEY } from "../utils/constants";
import { FaThumbsUp } from "react-icons/fa";
import Comment from "./Comment";

const WatchPage = () => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));
  const [videoData, setVideoData] = useState([]);
  const [comments, setComments] = useState([]);
  const SINGLE_VIDEO_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
    searchParams.get("v") +
    "&key=" +
    APIKEY;
  const COMMENTS_API =
    "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=" +
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
    const getCommentsData = async () => {
      try {
        const data = await fetch(COMMENTS_API);

        const json = await data.json();
        setComments(json.items);
        //console.log(json.items[1]);
        //console.log(comments);
      } catch (error) {
        console.error("failed to fetch comments data", error);
      }
    };

    getVideoData();
    getCommentsData();
  }, []);

  if (videoData.length === 0) return <h2>Video is on the way</h2>;
  if (comments.length === 0) return <h2>loading</h2>;

  const { snippet, statistics } = videoData;
  const { channelTitle, title, description } = snippet;
  const { likeCount } = statistics;

  return (
    <div className="grid h-[calc(100vh-64px)] grid-cols-12 overflow-hidden">
      <div className="h-full overflow-y-auto no-scrollbar bg-[#0f0f0f] text-white p-4 md:p-8 col-span-8">
        <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-6">
          {/* Main Video Column */}
          <div className="flex-1">
            {/* Video Wrapper with 16:9 Aspect Ratio */}
            <div className="relative w-full pb-4 aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] bg-[#121212] ">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                title="Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Metadata */}
            <div className="mt-4 w-full">
              <h1 className="text-xl md:text-2xl font-bold line-clamp-2">
                {title}
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-3">
                <div className="flex items-center space-x-3">
                  <div className="" />
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
                    👍🏻 {likeCount}
                  </button>
                  <button className="px-4 py-1.5 hover:bg-[#3f3f3f] rounded-r-full transition-colors">
                    👎🏻
                  </button>
                </div>
                <div
                  className="mt-4 p-3  bg-[#272727] rounded-xl hover:bg-[#3f3f3f] cursor-pointer  transition-colors duration-200"
                  onClick={() =>
                    !isDescriptionExpanded && setIsDescriptionExpanded(true)
                  }
                >
                  <div
                    className={`text-sm whitespace-pre-wrap wrap-break-word ${!isDescriptionExpanded ? "line-clamp-2" : "h-auto"}`}
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
        </div>
      </div>
      <div className="col-span-4 scroll-smooth no-scrollbar p-4 md:p-8 overflow-y-auto h-full text-white w-full mx-2]">
        <h1 className="text-xl md:text-xl mb-1 font-bold line-clamp-2">
          See What Others Are Saying
        </h1>
        {comments.map((each) => (
          <Comment info={each} key={each.id} />
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
