import React from "react";

const BurgerMenu: React.FC<{ handleClick: (e: React.MouseEvent<HTMLDivElement>) => void }> = ({ handleClick }) => {
  return (
    <>
      <div className="md:hidden my-auto ml-auto cursor-pointer pr-4">
        <div
          id="mobile-menu-toggle"
          className="group"
          onClick={(e) => handleClick(e)}
        >
          <div className="top-0 bg-zinc-200 rounded-full h-1 w-8 group-open:rotate-45 group-open:top-2 relative transition-all"></div>
          <div className="bg-zinc-200 rounded-full h-1 w-8 mt-1 mb-1 opacity-100 group-open:opacity-0 transition-all"></div>
          <div className="top-0 bg-zinc-200 rounded-full h-1 w-8 group-open:-rotate-45 group-open:-top-2 relative transition-all"></div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
