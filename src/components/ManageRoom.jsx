import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Card } from "primereact/card";
import axios from "axios";
import ListManageRoom from "./ListManageRoom";

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

const ManageRoom = (props) => {
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
        label="Gestionar Habitación"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Gestionar Habitación"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >

      <ListManageRoom/>  

      </Dialog>
    </div>
  );
};
export default ManageRoom;