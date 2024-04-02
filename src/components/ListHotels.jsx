import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ProductService } from "../service/ProductService";
import { Button } from "primereact/button";
import { DataView } from "primereact/dataview";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import "primeicons/primeicons.css";
import DetailHotel from "./DetailHotel";
import Maps from "./Maps";
import ListRoomHotel from "./ListRoomHotel";

const initialFormState = {
  id: null,
  name: "",
  description: "",
  image: "",
  price: null,
  category: "",
  inventoryStatus: "",
  rating: null,
};

const ListHotels = () => {
  const [products, setProducts] = useState([]);
  const [hotels, setHotels] = useState(initialFormState);
  const [id, setId] = useState(1);

  /*useEffect(() => {
    ProductService.getProducts().then((data) => setHotels(data));
  }, []);*/

  //Funcion get para listar hoteles
  React.useEffect(() => {
    axios.get("http://localhost:8088/hotels").then((response) => {
      setHotels(response.data);
    });
  }, []);

  const getSeverity = (hotels) => {
    switch (hotels.inventoryStatus) {
      case "Disponible":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "No Disponible":
        return "danger";

      default:
        return null;
    }
  };

  const details = (hotel) => {
    setId(hotel.id);
    console.log("hotel.id = " + hotel.id)
  };

  const itemTemplate = (hotels) => {
    return (
      <div className="col-12">
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <img
            className="w-9 sm:w-16rem xl:w-100rem shadow-2 block xl:block mx-auto border-round"
            src={`../image/${hotels.image}`}
            alt={hotels.name}
          />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{hotels.name}</div>
              <Rating value={hotels.rating} readOnly cancel={false}></Rating>
              <div className="flex align-items-center gap-3">
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{hotels.category}</span>
                </span>
                <Tag
                  value={hotels.inventoryStatus}
                  severity={getSeverity(hotels)}
                ></Tag>
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">${hotels.price}</span>
              <Button
                icon="pi pi-forward"
                className="p-button-rounded"
                disabled={hotels.inventoryStatus === "No disponible"}
                onClick={() => details(hotels)}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="card" id="izquierda">
        <DataView
          value={hotels}
          itemTemplate={itemTemplate}
          paginator
          rows={7}
        />
      </div>
      <div id="derecha">
        <DetailHotel id={id} />
        <ListRoomHotel id={id} />
        <Maps />
      </div>
    </div>
  );
};

export default ListHotels;
//<ReserveHotel id={id} />
