import React from "react";

const ReachMe = () => {
  return (
    /* This 'col-span-11' or 'col-span-full' (depending on your grid) 
       tells the grid: "I'm taking up all the available space."
    */
    <div className="col-span-11 h-full bg-[#0f0f0f] text-white p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-4xl font-bold mb-4">Reach Me</h1>
        <p className="text-gray-400 mb-10">Let's connect!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side: Contact Info */}
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5">
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">hello@tubeflix.com</p>
            </div>
            {/* Add more info boxes here */}
          </div>

          {/* Right Side: Form */}
          <form className="flex flex-col gap-4">
            <input
              className="bg-[#1a1a1a] p-4 rounded-xl outline-none"
              placeholder="Subject"
            />
            <textarea
              className="bg-[#1a1a1a] p-4 rounded-xl outline-none h-40"
              placeholder="Message"
            />
            <button className="bg-white text-black font-bold p-4 rounded-xl">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ReachMe;
