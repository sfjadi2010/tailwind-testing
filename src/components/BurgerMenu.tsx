import React from "react";
import MenuItems from "./MenuItems";

const BurgerMenu: React.FC = () => {
  return (
    <>
      <div className="md:hidden block my-auto ml-auto cursor-pointer pr-4">
        <details className="group peer">
          <summary id="mobile-menu-toggle" className="list-none">
            <div className="top-0 bg-zinc-200 rounded-full h-1 w-8 group-open:rotate-45 group-open:top-2 relative transition-all"></div>
            <div className="bg-zinc-200 rounded-full h-1 w-8 mt-1 mb-1 opacity-100 group-open:opacity-0 transition-all"></div>
            <div className="top-0 bg-zinc-200 rounded-full h-1 w-8 group-open:-rotate-45 group-open:-top-2 relative transition-all"></div>
          </summary>
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 group-open:block absolute w-full left-0 top-[62px] hidden">
            <MenuItems />
          </div>
        </details>
      </div>
    </>
  );
};

export default BurgerMenu;
