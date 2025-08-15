import React from "react";
import MenuItem from "./MenuItem";

const MenuItems: React.FC = () => {
  return (
    <>
      <MenuItem label="Home" />
      <MenuItem label="Lineup" />
      <MenuItem label="Tickets" subMenuItems={["VIP", "General"]} />
      <MenuItem label="Support" />
    </>
  );
};

export default MenuItems;
