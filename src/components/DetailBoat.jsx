import React, { useState, useEffect } from "react";
import { Card } from "primereact/card";
import ImageNavigatorBoat from "./ImageNavigatorBoat";
import axios from "axios";

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

const DetailBoat = (props) => {
  //const header = <img alt="Card" src="hotel_01.png" />;

  const [hotels, setHotels] = useState(initialFormState);
  const [codigo, setCodigo] = useState(1);

  //Funcion get para listar hoteles
  React.useEffect(() => {
    setCodigo(props.id);
    console.log("Codigo = " + codigo)
    const url = "http://localhost:8089/boat/" + codigo;
    axios.get(url).then((response) => {
      setHotels(response.data);
    });
  },[props.id, codigo]);

  const header = (
    <>
      <ImageNavigatorBoat id={codigo}/>
    </>
  );

  return (
    <div className="card flex justify-content-center">
      <Card
        title={hotels.name}
        subTitle="Hoteleria"
        header={header}
        className="md:w-100rem"
      >
        <p className="m-0">{hotels.description}</p>
      </Card>
    </div>
  );
};
export default DetailBoat;
