import React from "react";
import { hide, show } from "../Assets/index";

const MenuToggle = ({ showMenu, handleMenuToggle }) => {
  return (
    <button className="block lg:hidden" onClick={handleMenuToggle}>
      {showMenu ? (
        <img src={hide} alt="Hide Menu" className="h-6 w-6" />
      ) : (
        <img src={show} alt="Show Menu" className="h-6 w-6" />
      )}
    </button>
  );
};

export default MenuToggle;
