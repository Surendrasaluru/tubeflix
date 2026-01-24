import React from "react";
import { FaGreaterThan, FaRocket } from "react-icons/fa";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className=" shadow-lg col-span-1">
      <div className="flex items-center gap-2 font-bold text-xl">
        <span>Subscriptions</span>
        <FaRocket className="text-black" />
      </div>

      <ul>
        <li>DSA</li>
        <li>JavaScript</li>
        <li>Movies</li>
        <li>Music</li>
      </ul>
      <div className="flex items-center gap-2 font-bold text-xl">
        <span>You</span>
        <FaGreaterThan className="text-black" />
      </div>
      <ul>
        <li>History</li>
        <li>Watch Later</li>
        <li>Playlists</li>
        <li>Liked Videos</li>
      </ul>
    </div>
  );
};

export default Sidebar;
