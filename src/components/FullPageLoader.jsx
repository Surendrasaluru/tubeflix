import React from "react";
import { FaYoutube } from "react-icons/fa";

const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 z-[999] bg-[#0f0f0f] flex flex-col items-center justify-center">
      {/* Brand Logo with a Pulse Effect */}
      <div className="flex flex-col items-center animate-pulse">
        <div className="text-red-600 mb-4">
          <FaYoutube size={80} />
        </div>
        <h1 className="text-white text-3xl font-bold tracking-tighter">
          Tube<span className="text-white/70">Flix</span>
        </h1>
      </div>

      {/* Modern Spinning Ring */}
      <div className="mt-10">
        <div className="w-12 h-12 border-4 border-zinc-800 border-t-red-600 rounded-full animate-spin"></div>
      </div>

      <p className="mt-4 text-zinc-500 text-sm font-medium animate-bounce">
        Loading Your Videos To Make You Happy
      </p>
    </div>
  );
};

export default FullPageLoader;
