import "../style.css";
import React from "react";
import NavbarManager from "./NavbarManager";
import NavbarManagerAdm from "./NavbarManagerAdm";

const HeaderManager = () => {

  return (
    <>
      <div id="header"></div>
      <NavbarManager />;
      <div id="contenedor"></div>
    </>
  );
};

export default HeaderManager;
