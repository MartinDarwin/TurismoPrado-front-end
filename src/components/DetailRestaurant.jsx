import React, { useState, useEffect } from "react";
import { Card } from "primereact/card";
import ImageNavigatorRestaurant from "./ImageNavigatorRestaurant";
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

const DetailRestaurant = (props) => {
  //const header = <img alt="Card" src="hotel_01.png" />;

  const [restaurants, setRestaurants] = useState(initialFormState);
  const [codigo, setCodigo] = useState(1);

  //Funcion get para listar hoteles
  React.useEffect(() => {
    setCodigo(props.id);
    console.log("Codigo en detail = " + codigo)
    const url = "http://localhost:8087/restaurant/" + codigo;
    console.log("Codigo en detail 2 = " + codigo)
    axios.get(url).then((response) => {
      setRestaurants(response.data);
    });
  },[props.id, codigo]);

  const header = (
    <>
      <ImageNavigatorRestaurant id={codigo}/>
    </>
  );

  return (
    <div className="card flex justify-content-center">
      <Card
        title={restaurants.name}
        subTitle="Hoteleria"
        header={header}
        className="md:w-100rem"
      >
        <p className="m-0">{restaurants.description}</p>
      </Card>
    </div>
  );
};
export default DetailRestaurant;
