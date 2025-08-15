import React from "react";
import logoInverted from "./assets/images/logoInverted.png";
import MenuItem from "./components/MenuItem";
import BurgerMenu from "./components/BurgerMenu";

const handleMenuItemClick = (e: React.MouseEvent<HTMLDivElement>) => {
  // Handle menu item click
  e.preventDefault();
  if (e.currentTarget.className.includes("open")) {
    // Do something when the menu is open
    e.currentTarget.classList.remove("open");
  }
  else {
    e.currentTarget.classList.add("open");
  }
};

const App: React.FC = () => {
  return (
    <>
      <main>
        <header className="text-zinc-200">
          <nav className="sticky top-0 flex bg-gradient-to-r from-rose-500 to-pink-500">
            <div className="flex items-center gap-2 p-2">
              <img src={logoInverted} width="50" alt="Logo Inverted" />
              <div className="text-2xl font-bold">
                tw:<span className="text-sky-900">mf</span>
              </div>
            </div>
            <BurgerMenu handleClick={handleMenuItemClick} />
            <div className="hidden md:flex flex-1 items-center justify-end">
              <MenuItem label="Home" />
              <MenuItem label="Lineup" />
              <MenuItem label="Tickets" subMenuItems={["VIP", "General"]} />
              <MenuItem label="Support" />              
            </div>
          </nav>
        </header>
      </main>
    </>
  );
};

export default App;