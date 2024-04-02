import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { DataScroller } from "primereact/datascroller";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { RoomService } from "../service/RoomService";
import ReserveHotel from "./ReserveHotel";
import axios from "axios";

export default function ListRoomHotel(props) {
  const [products, setProducts] = useState([]);
  const [codigo, setCodigo] = useState(1);

  /*useEffect(() => {
    RoomService.getProducts().then((data) => setProducts(data));
  }, []);*/

  //Funcion get para listar hoteles
  React.useEffect(() => {
    setCodigo(props.id);
    const url = "http://localhost:8088/rooms/idhotel/" + codigo;
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }, [props.id, codigo]);

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "Disponible":
        return "success";
      case "Ocupado":
        return "danger";
      default:
        return null;
    }
  };

  const itemTemplate = (data) => {
    return (
      <div className="col-12">
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
            <div className="flex flex-column align-items-center lg:align-items-start gap-3">
              <div className="flex flex-column gap-1">
                <div>
                  <h3>{data.name}</h3>
                </div>
                <div>{data.description}</div>
              </div>
              <div className="flex flex-column gap-2">
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag product-category-icon"></i>
                  <span className="font-semibold">{data.category}</span>
                </span>
              </div>
            </div>
            <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">
              <span className="text-2xl font-semibold">${data.price}</span>
              <ReserveHotel id={data.id}/>
              <Tag
                value={data.inventoryStatus}
                severity={getSeverity(data)}
              ></Tag>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <DataScroller
        value={products}
        itemTemplate={itemTemplate}
        rows={5}
        inline
        scrollHeight="500px"
        header="Lista de habitaciones"
      />
    </div>
  );
}

