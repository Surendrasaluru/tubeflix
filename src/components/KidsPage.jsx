import React from "react";

import { TbMoodKid } from "react-icons/tb";
import { FiCalendar, FiBell } from "react-icons/fi";

const KidsPage = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-[#050505] flex items-center justify-center p-2 sm:p-6 col-span-11">
      <div className="max-w-2xl w-full text-center">
        {/* Icon: Smaller on mobile (w-20), larger on desktop (md:w-24) */}
        <div className="relative inline-block mb-6 md:mb-10">
          <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full"></div>
          <div className="relative w-20 h-20 md:w-24 md:h-24 bg-linear-to-tr from-red-800 to-slate-700 rounded-6 md:rounded-8 flex items-center justify-center shadow-2xl rotate-3">
            <TbMoodKid className="text-white text-4xl md:text-5xl" />
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex justify-center mb-2 md:mb-4">
          <div className="flex items-center gap-2 px-3 py-3 md:px-4 md:py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-gray-400">
              In Development
            </span>
          </div>
        </div>

        {/* Headline: Responsive text sizes */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 md:mb-6 leading-tight">
          Designed for the <br className="hidden sm:block" />
          <span className="text-red-400">Next Generation.</span>
        </h1>

        {/* Description: Smaller text on mobile */}
        <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-sm md:max-w-lg mx-auto mb-8 md:mb-10 px-2">
          We’re engineering a dedicated environment designed for curiosity and
          safety. Launching{" "}
          <span className="text-white font-semibold">May 2026</span>.
        </p>

        {/* Info Card: Adjusts padding for mobile */}
        <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 backdrop-blur-sm max-w-md mx-auto">
          <div className="flex items-center justify-between mb-5 md:mb-6">
            <div className="flex items-center gap-2 md:gap-3 text-left">
              <FiCalendar className="text-red-400 text-lg md:text-xl" />
              <div>
                <p className="text-[8px] md:text-[10px] uppercase text-gray-500 font-bold">
                  Launch
                </p>
                <p className="text-white text-xs md:text-sm font-medium">
                  May 2026
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-[8px] md:text-[10px] uppercase text-gray-500 font-bold">
                Status
              </p>
              <p className="text-red-400 text-xs md:text-sm font-medium italic">
                Finalizing UI
              </p>
            </div>
          </div>

          <button className="w-full py-2 md:py-3 bg-red-400 active:scale-95 text-black font-bold rounded-xl md:rounded-2xl transition-all flex items-center justify-center gap-2 text-sm md:text-base">
            <FiBell className="text-lg" />
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default KidsPage;
