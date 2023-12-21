import React from "react";
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import ImageNavigator from "./ImageNavigator";
import { InputText } from "primereact/inputtext";

export default function ReserveRestaurant() {
  const [value, setValue] = useState("");

  const initialFormState = {
    id: null,
    nombre: "",
    fecha: "",
    tipo: "",
    propietario: "",
  };
  const [mascota, setMascota] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMascota({ ...mascota, [name]: value });
  };

  return (
    <div class="container" id="bg">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="username">Username</label>
            </span>
        </div>
        <div>
          <button class="button button4">Guardar</button>
        </div>
      </form>
    </div>
  );
}
