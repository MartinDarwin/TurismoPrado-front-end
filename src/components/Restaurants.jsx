import "../style.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ListRestaurant from "./ListRestaurant";

const Restaurants = () => {
  return (
    <div id="contenedor">
      <div id="cabecera">
        <Header />
      </div>
      <div>
        <ListRestaurant />
      </div>      
      <div id="pie">
        <Footer />
      </div>
    </div>
  );
};

export default Restaurants;