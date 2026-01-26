import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube, FaUserCircle, FaBell } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex items-center justify-between p-2 md:p-4 shadow-lg bg-black sticky top-0 z-50">
      {/* Left Section: Menu & Logo */}
      <div className="flex items-center shrink-0">
        <GiHamburgerMenu
          className="h-6 w-6 md:h-8 md:w-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <div className="flex items-center cursor-pointer">
          <FaYoutube className="h-8 w-8 md:h-10 md:w-10 mx-2 md:mx-4 text-red-600" />
          {/* You can add a span here for the word "YouTube" visible only on md+ screens */}
          <span className="hidden md:block font-bold text-xl tracking-tighter">
            TubeFlix
          </span>
        </div>
      </div>

      {/* Center Section: Search Bar */}
      {/* Hidden on very small screens, or grows on medium screens */}
      <div className="flex grow justify-center px-2 md:px-0">
        <div className="flex w-full max-w-150">
          <input
            type="text"
            placeholder="Search"
            className="border w-full p-1.5 md:p-2 rounded-l-full border-gray-400 outline-none focus:border-blue-500 px-4"
          />
          <button className="border bg-gray-100 border-l-0 border-gray-400 p-1.5 md:p-2 px-3 md:px-5 rounded-r-full hover:bg-gray-200">
            🔍
          </button>
        </div>
      </div>

      {/* Right Section: Icons */}
      <div className="flex items-center shrink-0">
        {/* Bell hidden on mobile to save space, visible on sm+ */}
        <FaBell className="hidden sm:block h-6 w-6 mx-2 md:mx-4 cursor-pointer" />
        <FaUserCircle className="h-7 w-7 md:h-8 md:w-8 mx-2 md:mx-4 cursor-pointer" />
      </div>
    </div>
  );
};
/*const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col  p-4 shadow-lg ">
      <div className="flex col-span-2 cursor-pointer">
        <GiHamburgerMenu
          className="h-10 w-10"
          onClick={() => toggleMenuHandler()}
        />
        <FaYoutube className="h-10 w-10 mx-4 text-red-500 hover:text-red-700" />
      </div>
      <div className="col-span-8 text-center">
        <input
          type="text"
          className="border w-1/2 p-2 rounded-full rounded-r-none border-gray-600 text-left px-4"
        />
        <button className="border bg-black border-gray-600 p-2 px-3 rounded-full rounded-l-none ">
          Search
        </button>
      </div>
      <div className="col-span-2 flex">
        <FaUserCircle className="h-8 w-8 mx-4" />
        <FaBell className="h-8 w-8 mx-4" />
      </div>
    </div>
  );
};*/

export default Header;
