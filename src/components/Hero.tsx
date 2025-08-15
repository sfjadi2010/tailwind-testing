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
        </div>
      </div>
    </>
  );
};

export default Hero;
