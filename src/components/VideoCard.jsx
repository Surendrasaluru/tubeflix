import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";

// Extend dayjs with the relativeTime plugin
dayjs.extend(relativeTime);
dayjs.extend(duration);

const VideoCard = ({ info }) => {
  console.log(info.snippet);
  const { snippet, statistics, contentDetails } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;
  const { duration } = contentDetails;

  return (
    <div className="flex flex-col gap-2 cursor-pointer group max-w-96 rounded-b-sm hover:bg-gray-300 ">
      {/* Thumbnail */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
        <img
          src={thumbnails.medium.url}
          alt={title}
          className="object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[11px] font-bold px-1.5 py-0.5 rounded">
          {dayjs.duration(duration).format("m:ss")}
        </div>
      </div>

      {/* Details Area */}
      <div className="flex gap-3 pt-1">
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold leading-snug text-gray-900 line-clamp-2">
            {title}
          </h3>

          <div className="mt-1 text-xs text-gray-600">
            <p className="hover:text-black transition-colors">{channelTitle}</p>
            <p>
              {viewCount} views • {dayjs(publishedAt).fromNow()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

/** */
