import React from "react";

const Link: React.FC<{ label: string, subMenuItems?: string[] }> = ({ label, subMenuItems }) => {
  return (
    <div className="group relative flex h-full item-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
      <span>{label}</span>
      {subMenuItems && subMenuItems.length > 0 && (
        <div className="hidden group-hover:block absolute top-full right-0 bg-pink-500 white-space-nowrap rounded-b-md text-right">
          {subMenuItems.map((item, index) => (
            <div key={index} className="p-4 font-bold hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out cursor-pointer text-pink-200">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Link;
