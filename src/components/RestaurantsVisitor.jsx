import "../style.css";
import React from "react";
import HeaderVisitor from "./HeaderVisitor";
import Footer from "./Footer";
import ListRestaurantVisitor from "./ListRestaurantVisitor";

const RestaurantsVisitor = () => {
  return (
    <div id="contenedor">
      <div id="cabecera">
        <HeaderVisitor />
      </div>
      <div>
        <ListRestaurantVisitor />
      </div>      
      <div id="pie">
        <Footer />
      </div>
    </div>
  );
};

export default RestaurantsVisitor;