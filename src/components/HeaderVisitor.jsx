import "../style.css";
import React from "react";
import NavbarVisitor from "./NavbarVisitor";

const Header = () => {
  return (
    <>
      <div id="header"></div>
      <div id="contenedor">
        <NavbarVisitor />
      </div>
    </>
  );
};

export default Header;
