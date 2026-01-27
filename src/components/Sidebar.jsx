import React from "react";
import {
  FaGreaterThan,
  FaRocket,
  FaHome,
  FaPlayCircle,
  FaClock,
  FaVideo,
  FaThumbsUp,
  FaHamburger,
  FaYoutube,
  FaPlusSquare,
  FaPlus,
} from "react-icons/fa";
import { FaChildren, FaMessage, FaMusic } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io5";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const menuItems = [
    { icon: <FaHome size={22} />, label: "Home" },
    { icon: <FaPlayCircle size={22} />, label: "Shorts" },
    { icon: <FaVideo size={22} />, label: "Subscriptions" },
    { icon: <FaClock size={22} />, label: "History" },
    { icon: <FaThumbsUp size={22} />, label: "Liked Videos" },

    { icon: <FaChildren size={22} />, label: "TubeFlix Kids" },
    { icon: <FaMusic size={22} />, label: "TubeFlix Music" },
    { icon: <FaMessage size={22} />, label: "ReachMe" },
    {
      icon: <FaPlus size={22} />,
      label: "TubeFlix Plus",
    },
  ];
  if (!isMenuOpen) return null;
  return (
    <div className="border-r border-white/5 bg-[#0f0f0f] h-full col-span-1 lg:col-span-2">
      <aside className="bg-[#0f0f0f] text-white transition-all duration-300 p-2 pt-4 ">
        {/* Hamburger Menu Trigger */}
        <div className="flex items-center px-3 mb-6 shrink-0">
          <Link to="/">
            {" "}
            <button className="p-2 hover:bg-[#272727] rounded-full transition-colors">
              <FaYoutube size={24} />
            </button>
          </Link>

          <span className="ml-4 font-bold text-xl tracking-tighter">
            TubeFlix
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-1">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path || `/${item.label.toLowerCase()}`}
              className="flex items-center p-3 rounded-xl hover:bg-[#272727] transition-colors"
            >
              <div className="shrink-0">{item.icon}</div>

              <span className="ml-5 text-sm font-medium whitespace-nowrap overflow-hidden">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;

/**
 * <div className=" shadow-lg col-span-1">
      <div className="flex items-center gap-2 font-bold text-xl">
        <span>Subscriptions</span>
        <FaRocket className="text-black" />
      </div>

      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
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
 */
