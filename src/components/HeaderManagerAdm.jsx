import "../style.css";
import React from "react";
import NavbarManager from "./NavbarManager";
import NavbarManagerAdm from "./NavbarManagerAdm";

const HeaderManagerAdm = () => {

  return (
    <>
      <div id="header"></div>
      <NavbarManagerAdm />
      <div id="contenedor"></div>
    </>
  );
};

export default HeaderManagerAdm;
