import "../style.css";
import React from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div id="header"></div>
      <div id="contenedor">
        <Navbar />
      </div>
    </>
  );
};

export default Header;
