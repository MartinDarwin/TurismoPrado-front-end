import "../style.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ListReserveHotelUser from "./ListReserveHotelUser";
import { useState } from "react";
import ListReserveRestaurantUser from "./ListReserveRestaurantUser";
import ListReserveBoatUser from "./ListReserveBoatUser";

const ManageReserve = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div id="contenedor">
      <div id="cabecera">
        <Header />
      </div>
      <div className="flex flex-wrap gap-2">
        <ListReserveHotelUser />
        <ListReserveRestaurantUser />
        <ListReserveBoatUser />        
      </div>
      <div id="pie">
        <Footer />
      </div>
    </div>
  );
};

export default ManageReserve;
