import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import axios from "axios";
import { Password } from "primereact/password";
import { useNavigate } from "react-router-dom";
import ListHotels from "./ListHotels";
import ManageReserve from "./ManageReserve";

const LoginAdm = (props) => {
  let navegate = useNavigate();

  const initialFormState = {
    id: null,
    name: "",
    password: "",
  };

  const [reserve, setReserve] = useState(initialFormState);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReserve({ ...reserve, [name]: value });
  };

  const iniciarsesion = (name) => {
    console.log(name);
    if(name === "Admin"){
      navegate("/managehoteladm");}
  };

  return (
    <div class="container" id="bg">
      <Button
        label="Iniciar Sesión"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Login"
        visible={visible}
        style={{ width: "20vw" }}
        onHide={() => setVisible(false)}
      >
        <div class="divTableHeading justify-content-center">
          <div className="formgrid grid justify-content-center">
            <div class="divTableCell justify-content-center">
              <label htmlFor="name" className="font-bold block mb-2">
                Usuario
              </label>
              <InputText
                name="name"
                value={reserve.name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="formgrid grid justify-content-center">
            <div class="divTableCell justify-content-center">
              <label htmlFor="password" className="font-bold block mb-2">
                Contraseña
              </label>
              <Password
                name="password"
                value={value}                
                onChange={(e) => setValue(e.target.value)}
                feedback={false}
                tabIndex={1}
              />
            </div>
          </div>
        </div>
        <div class="card flex justify-content-center"></div>
        <div class="card flex justify-content-center">
          <Button
            icon="pi pi-check"
            onClick={() => iniciarsesion(reserve.name)}
            autoFocus
          >
            Login
          </Button>
        </div>
        
        
      </Dialog>
    </div>
  );
};

export default LoginAdm;

//<Button icon="pi pi-check" onClick={()=>navegate("/managehotel")} autoFocus></Button>
