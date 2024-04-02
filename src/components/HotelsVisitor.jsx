import "../style.css";
import React from "react";
import HeaderVisitor from "./HeaderVisitor";
import Footer from "./Footer";
import ListHotelsVisitor from "./ListHotelsVisitor";

const HotelsVisitor = () => {
  return (
    <div id="contenedor">
      <div id="cabecera">
        <HeaderVisitor />
      </div>
      <div>
        <ListHotelsVisitor />
      </div>      
      <div id="pie">
        <Footer />
      </div>
    </div>
  );
};

export default HotelsVisitor;
