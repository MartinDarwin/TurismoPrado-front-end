import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BoatService } from "../service/BoatService";
import { Button } from "primereact/button";
import { DataView } from "primereact/dataview";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import "primeicons/primeicons.css";
import DetailBoat from "./DetailBoat";
import Maps from "./Maps";
import ListBoatDetailVisitor from "./ListBoatDetailVisitor";

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

const ListBoatsVisitor = () => {
  const [products, setProducts] = useState([]);
  const [boats, setBoats] = useState(initialFormState);
  const [id, setId] = useState(1);

  /*useEffect(() => {
    BoatService.getProducts().then((data) => setBoats(data));
  }, []);*/

  //Funcion get para listar hoteles
  React.useEffect(() => {
    axios.get("http://localhost:8089/boats").then((response) => {
      setBoats(response.data);
    });
  }, []);

  const getSeverity = (boats) => {
    switch (boats.inventoryStatus) {
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

  const itemTemplate = (boats) => {
    return (
      <div className="col-12">
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <img
            className="w-9 sm:w-16rem xl:w-100rem shadow-2 block xl:block mx-auto border-round"
            src={`../image3/${boats.image}`}
            alt={boats.name}
          />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{boats.name}</div>
              <Rating value={boats.rating} readOnly cancel={false}></Rating>
              <div className="flex align-items-center gap-3">
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{boats.category}</span>
                </span>
                <Tag
                  value={boats.inventoryStatus}
                  severity={getSeverity(boats)}
                ></Tag>
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">${boats.price}</span>
              <Button
                icon="pi pi-forward"
                className="p-button-rounded"
                disabled={boats.inventoryStatus === "No disponible"}
                onClick={() => details(boats)}
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
          value={boats}
          itemTemplate={itemTemplate}
          paginator
          rows={7}
        />
      </div>
      <div id="derecha">
        <DetailBoat id={id} />
        <ListBoatDetailVisitor id={id} />
        <Maps />
      </div>
    </div>
  );
};

export default ListBoatsVisitor;
//<ReserveHotel id={id} />
