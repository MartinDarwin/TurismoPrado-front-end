import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import axios from "axios";
import { Password } from "primereact/password";
import { useNavigate } from "react-router-dom";

const LoginUser = (props) => {
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
    console.log(name)
    if(name == "Admin"){
    navegate("/managehotel");}
    else{navegate("/managereserve")}
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
        style={{ width: "30vw" }}
        onHide={() => setVisible(false)}
      >
        <div class="justify-content-center">
          <div class="card flex justify-content-center">
            <label htmlFor="username" className="font-bold block mb-2">Usuario: </label>
            <InputText
              name="name"
              value={reserve.name}
              onChange={handleInputChange}
            />
          </div>
          <div class="card flex justify-content-center">
            <label htmlFor="password" className="font-bold block mb-2">
              Contraseña: 
            </label>
            <div class="card flex justify-content-center">
              <Password
                value={value}
                onChange={(e) => setValue(e.target.value)}
                feedback={false}
                tabIndex={1}
              />
            </div>
          </div>
        </div>
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

export default LoginUser;

//<Button icon="pi pi-check" onClick={()=>navegate("/managehotel")} autoFocus></Button>
