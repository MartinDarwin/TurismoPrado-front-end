import "../style.css";
import React from "react";
import HeaderVisitor from "./HeaderVisitor";
import Footer from "./Footer";
import ListBoatsVisitor from "./ListBoatsVisitor";

const BoatsVisitor = () => {
  return (
    <div id="contenedor">
      <div id="cabecera">
        <HeaderVisitor />
      </div>
      <div>
        <ListBoatsVisitor />
      </div>      
      <div id="pie">
        <Footer />
      </div>
    </div>
  );
};

export default BoatsVisitor;
