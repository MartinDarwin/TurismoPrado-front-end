import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { RestaurantService } from "../service/RestaurantService";
import { Button } from "primereact/button";
import { DataView } from "primereact/dataview";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import "primeicons/primeicons.css";
import DetailRestaurant from "./DetailRestaurant";
import Maps from "./Maps";
import ListDishRestaurant from "./ListDishRestaurant";

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

const ListRestaurants = () => {
  const [products, setProducts] = useState([]);
  const [restaurants, setRestaurants] = useState(initialFormState);
  const [id, setId] = useState(1);

  /*useEffect(() => {
    RestaurantService.getProducts().then((data) => setRestaurants(data));
  }, []);*/

  //Funcion get para listar hoteles
  React.useEffect(() => {
    axios.get("http://localhost:8087/restaurants").then((response) => {
      setRestaurants(response.data);
    });
  }, []);

  const getSeverity = (restaurants) => {
    switch (restaurants.inventoryStatus) {
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
  };

  const itemTemplate = (restaurants) => {
    return (
      <div className="col-12">
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <img
            className="w-9 sm:w-16rem xl:w-100rem shadow-2 block xl:block mx-auto border-round"
            src={`../image2/${restaurants.image}`}
            alt={restaurants.name}
          />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{restaurants.name}</div>
              <Rating value={restaurants.rating} readOnly cancel={false}></Rating>
              <div className="flex align-items-center gap-3">
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{restaurants.category}</span>
                </span>
                <Tag
                  value={restaurants.inventoryStatus}
                  severity={getSeverity(restaurants)}
                ></Tag>
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">${restaurants.price}</span>
              <Button
                icon="pi pi-forward"
                className="p-button-rounded"
                disabled={restaurants.inventoryStatus === "No disponible"}
                onClick={() => details(restaurants)}
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
          value={restaurants}
          itemTemplate={itemTemplate}
          paginator
          rows={7}
        />
      </div>
      <div id="derecha">
        <DetailRestaurant id={id} />
        <ListDishRestaurant id={id} />
        <Maps />
      </div>
    </div>
  );
};

export default ListRestaurants;
//<ReserveHotel id={id} />
