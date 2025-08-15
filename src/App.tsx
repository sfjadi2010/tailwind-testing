import React from "react";
import logoInverted from "./assets/images/logoInverted.png";
import BurgerMenu from "./components/BurgerMenu";
import MenuItems from "./components/MenuItems";

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
            <BurgerMenu />
            <div className="hidden md:flex flex-1 items-center justify-end">
              <MenuItems />
            </div>
          </nav>
        </header>
      </main>
    </>
  );
};

export default App;
