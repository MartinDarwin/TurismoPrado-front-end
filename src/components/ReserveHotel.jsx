import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { ProductService } from "../service/ProductService";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import axios from "axios";

export default function ReserveHotel(props) {
  let emptyProduct = {
    id: null,
    name: "",
    lastname: "",
    phone: "",
    email: "",
    dateini: "",
    dateend: "",
    idroom: props.id,
  };

  const [products, setProducts] = useState(null);
  const [productDialog, setProductDialog] = useState(false);
  const [product, setProduct] = useState(emptyProduct);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const toast = useRef(null);
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data));
  }, []);

  const type = [
    { name: "Cliente", code: "CL" },
    { name: "Empresario", code: "EM" },
  ];

  const openNew = () => {
    setProduct(emptyProduct);
    setSubmitted(false);
    setProductDialog(true);
    setPassword("");
    setRepassword("");
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const saveProduct = async () => {
    setSubmitted(true);

    if (
      product.name.trim() &&
      product.lastname.trim() &&
      product.phone.trim() &&
      product.email.trim() &&
      product.dateini &&
      product.dateend
    ) {
      let _products = [...products];

      product.password = password;

      try {
        const url = "http://localhost:8088/reserve";
        const response = await axios.post(url, product);
      } catch (error) {
        console.error(error);
      }
      toast.current.show({
        severity: "success",
        summary: "Successful",
        detail: "Reserva Realizada",
        life: 3000,
      });

      setProducts(_products);
      setProductDialog(false);
      setProduct(emptyProduct);
    }
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _product = { ...product };

    _product[`${name}`] = val;

    setProduct(_product);
  };

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="Realizar Reserva"
          icon="pi pi-external-link"
          onClick={openNew}
        />
      </div>
    );
  };

  const productDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
    </React.Fragment>
  );

  return (
    <div>
      <Toast ref={toast} />
      <div className="card">
        <Toolbar className="mb-4" left={leftToolbarTemplate}></Toolbar>
      </div>

      <Dialog
        visible={productDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        header="Reservar Habitación"
        modal
        className="p-fluid"
        footer={productDialogFooter}
        onHide={hideDialog}
      >
        <div className="field"></div>

        <div className="formgrid grid">
          <div className="field col">
            <label htmlFor="name" className="font-bold">
              Nombres
            </label>
            <InputText
              id="name"
              value={product.name}
              onChange={(e) => onInputChange(e, "name")}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !product.name,
              })}
            />
            {submitted && !product.name && (
              <small className="p-error">Nombre es requerido</small>
            )}
          </div>
          <div className="field col">
            <label htmlFor="lastname" className="font-bold">
              Apellidos
            </label>
            <InputText
              id="lastname"
              value={product.lastname}
              onChange={(e) => onInputChange(e, "lastname")}
              required
              className={classNames({
                "p-invalid": submitted && !product.lastname,
              })}
            />
            {submitted && !product.lastname && (
              <small className="p-error">Apellido es requerido</small>
            )}
          </div>
        </div>

        <div className="formgrid grid">
          <div className="field col">
            <label htmlFor="phone" className="font-bold">
              Telefono/Celular
            </label>
            <InputText
              id="phone"
              value={product.phone}
              onChange={(e) => onInputChange(e, "phone")}
              required
              className={classNames({
                "p-invalid": submitted && !product.phone,
              })}
            />
            {submitted && !product.phone && (
              <small className="p-error">Celular es requerido</small>
            )}
          </div>
          <div className="field col">
            <label htmlFor="email" className="font-bold">
              E-mail
            </label>
            <InputText
              id="email"
              value={product.email}
              onChange={(e) => onInputChange(e, "email")}
              required
              className={classNames({
                "p-invalid": submitted && !product.email,
              })}
            />
            {submitted && !product.email && (
              <small className="p-error">Correo es requerido</small>
            )}
          </div>
        </div>

        <div className="formgrid grid">
          <div className="field col">
            <label htmlFor="dateini" className="font-bold block mb-2">
              Fecha de Ingreso
            </label>
            <Calendar
              name="dateini"
              value={product.dateini}
              onChange={(e) => onInputChange(e, "dateini")}
              showTime
              hourFormat="12"
              className={classNames({
                "p-invalid": submitted && !product.dateini,
              })}
            />
            {submitted && !product.dateini && (
              <small className="p-error">Fecha es requerido</small>
            )}
          </div>
          <div className="field col">
            <label htmlFor="dateend" className="font-bold block mb-2">
              Fecha de Salida
            </label>
            <Calendar
              name="dateend"
              value={product.dateend}
              onChange={(e) => onInputChange(e, "dateend")}
              showTime
              hourFormat="12"
              className={classNames({
                "p-invalid": submitted && !product.dateend,
              })}
            />
            {submitted && !product.dateend && (
              <small className="p-error">Fecha es requerido</small>
            )}
          </div>
        </div>

      </Dialog>
    </div>
  );
}
