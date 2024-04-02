import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import axios from "axios";
import ListManageDish from "./ListManageDish";

const initialFormState = {
  id: null,
  code: "",
  name: "",
  description: "",
  image: "",
  price: null,
  category: "",
  quantity: null,
  inventoryStatus: "",
  rating: null,
};

const ManageDish = (props) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const [datetime1h, setDateTime1h] = useState(null);
  const [datetime2h, setDateTime2h] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [hotels, setHotels] = useState(initialFormState);
  const [codigo, setCodigo] = useState(1);

  //Funcion get para listar hoteles
  /*React.useEffect(() => {
    setCodigo(props.id);
    const url = "http://localhost:8088/hotel/" + codigo;
    axios.get(url).then((response) => {
      setHotels(response.data);
    });
  }, [props.id, codigo]);*/


  return (
    <div className="card flex justify-content-center">
      <Button
        label="Gestionar Plato"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Gestionar Plato"
        visible={visible}
        style={{ width: "90vw" }}
        onHide={() => setVisible(false)}
      >

      <ListManageDish id = {props.id}/>  

      </Dialog>
    </div>
  );
};
export default ManageDish;