import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube, FaUserCircle, FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col  p-4 shadow-lg">
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
        <button className="border bg-gray-300 border-gray-600 p-2 px-3 rounded-full rounded-l-none ">
          Search
        </button>
      </div>
      <div className="col-span-2">
        <FaUserCircle className="h-10 w-10 mx-4" />
      </div>
    </div>
  );
};

export default Header;
