import "../style.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ListBoats from "./ListBoats";

const Boats = () => {
  return (
    <div id="contenedor">
      <div id="cabecera">
        <Header />
      </div>
      <div>
        <ListBoats />
      </div>      
      <div id="pie">
        <Footer />
      </div>
    </div>
  );
};

export default Boats;
