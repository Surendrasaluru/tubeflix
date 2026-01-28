import React from "react";
import { IoDiamondOutline } from "react-icons/io5"; // Premium look
import { RiLockPasswordLine } from "react-icons/ri";

const PlusGateway = ({ featureName, description }) => {
  return (
    <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden rounded-3xl border border-white/5 bg-black col-span-11">
      {/* 1. The Blurred Background (Mimics real content) */}
      <div className="absolute inset-0 opacity-20 blur-xl pointer-events-none select-none">
        <div className="flex flex-wrap gap-4 p-10">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-64 h-40 bg-gray-700 rounded-xl" />
          ))}
        </div>
      </div>

      {/* 2. The Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-linear-to-tr from-red-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-600/20 mb-6">
          <IoDiamondOutline className="text-white text-4xl animate-pulse" />
        </div>

        <h2 className="text-3xl font-black tracking-tight text-white">
          UNLOCK{" "}
          <span className="text-red-600">{featureName.toUpperCase()}</span>
        </h2>

        <p className="mt-3 text-gray-400 max-w-sm text-balance">
          {description ||
            `the ${featureName} feature is only available for utub+ members. no cap, it's worth the upgrade.`}
        </p>

        <div className="mt-8 flex flex-col gap-3 w-full max-w-xs">
          <button className="bg-white text-black font-bold py-4 rounded-2xl hover:bg-gray-200 transition-all active:scale-95">
            Get TubeFlix Plus Now
          </button>
          <button className="text-gray-500 text-sm font-medium hover:text-white transition-colors">
            maybe later
          </button>
        </div>

        {/* Floating Badge */}
        <div className="mt-12 flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
          <RiLockPasswordLine className="text-red-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
            Secure Access
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlusGateway;
