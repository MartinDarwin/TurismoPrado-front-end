import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Card } from "primereact/card";
import axios from "axios";

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

const ReserveHotel = (props) => {
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
        label="Realizar Reserva"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Reservar Habitación"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <div className="card flex justify-content-center">
          <Card
            //title={hotels.name}
            subTitle="Hoteleria"
            className="md:w-100rem"
          ></Card>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <table class="default">
            <tr>
              <td>
                <div className="card flex justify-content-left">
                  <span className="p-float-label">
                    <InputText
                      id="nombres"
                      value={value.nombres}
                      //value={props.id}  id para relacionar al cliente con el hotel
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <label htmlFor="nombres">Nombres</label>
                  </span>
                </div>
              </td>

              <td>
                <div className="card flex justify-content-left">
                  <span className="p-float-label">
                    <InputText
                      id="apellidos"
                      value={value.apellidos}
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <label htmlFor="apellidos">Apellidos</label>
                  </span>
                </div>
              </td>

              <td>
                <div className="card flex justify-content-left">
                  <span className="p-float-label">
                    <InputText
                      id="telefono"
                      value={value.telefono}
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <label htmlFor="telefono">Telefono</label>
                  </span>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="card flex justify-content-left">
                  <span className="p-float-label">
                    <InputText
                      id="email"
                      value={value.telefono}
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <label htmlFor="email">E-mail</label>
                  </span>
                </div>
              </td>

              <td>
                <div className="card flex justify-content-left">
                  <span className="p-float-label">
                    <InputText
                      id="city"
                      value={value.ciudad}
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <label htmlFor="city">Ciudad Origen</label>
                  </span>
                </div>
              </td>

              <td>
                <div className="card flex justify-content-left">
                  <span className="p-float-label">
                    <InputText
                      id="numpersonas"
                      value={value.numpersonas}
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <label htmlFor="numpersonas">Número de personas</label>
                  </span>
                </div>
              </td>

            </tr>
          </table>

          <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
              <label htmlFor="calendar-12h" className="font-bold block mb-2">
                Fecha y hora de ingreso
              </label>
              <Calendar
                id="calendar-12h"
                value={datetime1h}
                onChange={(e) => setDateTime1h(e.value)}
                dateFormat="dd/mm/yy"
                showTime
                hourFormat="12"
              />
            </div>
            <div className="flex-auto">
              <label htmlFor="calendar-12h" className="font-bold block mb-2">
                Fecha y hora de retiro
              </label>
              <Calendar
                id="calendar-12h"
                value={datetime2h}
                onChange={(e) => setDateTime2h(e.value)}
                dateFormat="dd/mm/yy"
                showTime
                hourFormat="12"
              />
            </div>
          </div>
          <div className="card flex justify-content-center">
            <Button
              label="Cancelar"
              icon="pi pi-times"
              onClick={() => setVisible(false)}
              className="p-button-text"
            />
            <Button
              label="Confirmar"
              icon="pi pi-check"
              onClick={() => setVisible(false)}
              autoFocus
            />
          </div>
        </form>
      </Dialog>
    </div>
  );
};
export default ReserveHotel;
