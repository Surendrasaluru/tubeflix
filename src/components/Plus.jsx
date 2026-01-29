import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Plus = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for Less Watchers.",
      features: ["Standard Video Quality", "Limited Downloads", "Ad-supported"],
      buttonText: "Get Started",
      highlight: false,
    },
    {
      name: "Lite",
      price: "₹ 59",
      description: "The best experience for Binge Watchers.",
      features: [
        "1080P HD",
        "Supports Double-Device Login",
        "Priority Support",
        "Downloads Upto Cloud Storage Of 50GB",
      ],
      buttonText: "Go Pro",
      highlight: true, // This will make the card stand out
    },
    {
      name: "Pro",
      price: "₹ 189",
      description: "Suits For Friends Gang",
      features: [
        "5-User Login",
        "4K Ultra HD",
        "Downloads Upto Cloud Storage Of 180GB",
        "24/7 Support",
      ],
      buttonText: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <div className="col-span-11 h-[calc(100vh-64px)] overflow-hidden bg-[#0f0f0f] text-white p-4 md:p-12">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
          Choose Your <span className="text-red-600">Plan</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Unlock premium features and support the creators you love. Cancel or
          switch plans anytime.
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto pb-20">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 hover:scale-[1.02] ${
              plan.highlight
                ? "bg-[#1a1a1a] border-2 border-red-600 shadow-[0_0_30px_-10px_rgba(220,38,38,0.3)]"
                : "bg-[#121212] border border-white/10"
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Most Popular
              </span>
            )}

            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              {plan.price !== "Free" && (
                <span className="text-gray-400">/mo</span>
              )}
            </div>
            <p className="text-gray-400 text-sm mb-8">{plan.description}</p>

            <ul className="space-y-4 mb-10 flex-1">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm">
                  <FaCheckCircle
                    className={
                      plan.highlight ? "text-red-600" : "text-gray-500"
                    }
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 ${
                plan.highlight
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plus;
