import "../style.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ListHotels from "./ListHotels";

const Hotels = () => {
  return (
    <div id="contenedor">
      <div id="cabecera">
        <Header />
      </div>
      <div>
        <ListHotels />
      </div>      
      <div id="pie">
        <Footer />
      </div>
    </div>
  );
};

export default Hotels;
