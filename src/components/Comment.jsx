import React from "react";

const Comment = ({ info }) => {
  //console.log(info.snippet);
  // Assuming videoComments is your state where you stored the API response

  // Destructure the parts you need

  return (
    <div className="flex gap-4 p-3  border border-b border-white/5 hover:bg-white/5 px-2 rounded-lg transition-all">
      <img
        src={info?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
        alt="profile"
        className="w-10 h-10 rounded-full"
      />

      {/* Comment Details */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-bold text-white">
            {info?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          </span>
          <span className="text-xs text-gray-500 font-normal">1 day ago</span>
        </div>
        <p className="text-sm text-gray-300 mt-0.5 leading-snug">
          {info?.snippet?.topLevelComment?.snippet?.textOriginal}
        </p>
      </div>
    </div>
  );
};

export default Comment;
