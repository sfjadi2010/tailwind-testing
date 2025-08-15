import React from "react";
import heroImage from "../assets/images/hero.jpg";
import logo from "../assets/images/logo.png";

const Hero: React.FC = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${heroImage})` }}
        className={
          "flex flex-col items-center justify-center h-[calc(100vh-200px)] bg-gradient-to-r min-h-[400px] text-white text-4xl font-bold bg-fixed bg-cover"
        }
      >
        <div className="bg-white/30 py-2 px-4 rounded-xl text-center backdrop-blur-md">
          <div className="relative">
            <img src={logo} alt="logo" className="w-[175px]" />
          </div>
          <div className="text-5xl font-bold">
            tw:<span className="text-sky-900">mf</span>
          </div>
        </div>
        <div className="text-sm mt-3 font-bold">
          Keep me updated with news and promotions
        </div>
        <div className="mt-3 flex items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="bg-pink-500 text-white px-2 py-2 rounded-r-sm hover:bg-pink-600 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
