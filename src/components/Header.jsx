import React, { useEffect, useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube, FaUserCircle, FaBell } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const [searchq, setSearchq] = useState("");

  const [suggestions, setSuggestions] = useState([]); // State for UI
  const [showSuggestions, setShowSuggestions] = useState(false);
  console.log(searchq);
  useEffect(() => {
    const getSearchSuggestions = async () => {
      const data = await fetch(YOUTUBE_SEARCH_API + searchq);
      const json = await data.json();

      setSuggestions(json[1]);
    };

    const timer = setTimeout(() => {
      if (searchq) getSearchSuggestions();
      else setSuggestions([]); // Clear if input is empty
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchq]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex items-center justify-between p-2 md:p-4 shadow-lg bg-black sticky top-0 z-50">
      <div className="flex items-center shrink-0">
        <GiHamburgerMenu
          className="h-6 w-6 md:h-8 md:w-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <div className="flex items-center cursor-pointer">
          <FaYoutube className="h-8 w-8 md:h-10 md:w-10 mx-2 md:mx-4 text-red-600" />

          <span className="hidden md:block font-bold text-xl tracking-tighter">
            TubeFlix
          </span>
        </div>
      </div>

      <div className="flex grow justify-center px-2 md:px-0">
        <div className="relative w-full max-w-150 group">
          {" "}
          {/* Container for absolute positioning */}
          <div className="flex w-full">
            <input
              type="text"
              value={searchq}
              onChange={(e) => setSearchq(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Small delay to allow clicking suggestions
              placeholder="Search"
              className="border w-full p-2 rounded-l-full border-gray-600 bg-[#121212] outline-none focus:border-blue-500 px-4 text-white"
            />
            <button className="border bg-[#222222] border-l-0 border-gray-600 p-1.5 md:p-2 px-3 md:px-5 rounded-r-full hover:bg-[#333333]">
              🔍
            </button>
          </div>
          {/* Suggestions List */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-[110%] left-0 w-full bg-[#212121] text-white rounded-xl shadow-2xl border border-[#3f3f3f] py-4 z-50 overflow-hidden">
              <ul className="flex flex-col">
                {suggestions.map((s, index) => (
                  <li
                    key={index}
                    className="flex items-center px-5 py-2 hover:bg-[#3f3f3f] cursor-default transition-colors duration-100"
                    onClick={() => {
                      setSearchq(s);
                      setShowSuggestions(false);
                    }}
                  >
                    <span className="mr-4 text-gray-400">
                      {/* Modern search icon using a simple SVG */}
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                      </svg>
                    </span>
                    <span className="text-[15px] font-medium truncate">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* Right Section: Icons */}
      <div className="flex items-center shrink-0">
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
