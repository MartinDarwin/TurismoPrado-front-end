import React, { useState, useEffect } from "react";
import { Galleria } from "primereact/galleria";
import { PhotoService } from "../service/PhotoService";
import axios from "axios";

export default function ImageNavigator(props) {
  const [images, setImages] = useState(null);
  const [codigo, setCodigo] = useState(1);

  /*useEffect(() => {
    PhotoService.getImages().then((data) => setImages(data));
  }, []);*/

  //Funcion get para listar hoteles
  React.useEffect(() => {
    setCodigo(props.id);
    console.log("Codigo de imagen= " + codigo);
    const url = "http://localhost:8088/images/idhotel/" + codigo;
    axios.get(url).then((response) => {
      setImages(response.data);
    });
  }, [props.id, codigo]);
  
  const itemTemplate = (item) => {
    return (
      <img
        src={item.itemimagesrc}
        alt={item.alt}
        style={{ width: "100%", display: "block" }}
      />
    );
  };

  return (
    <div className="card">
      <Galleria
        value={images}
        numVisible={5}
        circular
        style={{ maxWidth: "640px" }}
        showThumbnails={false}
        showItemNavigators
        item={itemTemplate}
        //thumbnail={thumbnailTemplate}
      />
    </div>
  );
}
