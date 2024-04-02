import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ReserveServiceHotelUser } from "../service/ReserveServiceHotelUser";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import axios from "axios";

export default function ListReserveHotelUser() {
  let emptyProduct = {
    id: null,
    hotel: "",
    name: "",
    lastname: "",
    phone: "",    
    email: "",
    hotel: "",
    habitacion: "",
    dateini: "",
    dateend: "",
    city: "",
    idroom: "",
  };

  const [products, setProducts] = useState(null);
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(emptyProduct);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProducts({ ...product, [name]: value });
  };

  /*useEffect(() => {
    ReserveServiceHotelUser.getProducts().then((data) => setProducts(data));
  }, []);*/

  //Funcion get para listar hoteles
  React.useEffect(() => {
    axios.get("http://localhost:8088/reserves_hotel").then((response) => {
        setProducts(response.data);
    });
  }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const openNew = () => {
    setProduct(emptyProduct);
    setSubmitted(false);
    setProductDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };

  const saveProduct = () => {
    setSubmitted(true);

    if (product.name.trim()) {
      let _products = [...products];
      let _product = { ...product };

      if (product.id) {
        const index = findIndexById(product.id);

        _products[index] = _product;
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "Product Updated",
          life: 3000,
        });
      } else {
        _product.id = createId();
        _product.image = "product-placeholder.svg";
        _products.push(_product);
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "Product Created",
          life: 3000,
        });
      }

      setProducts(_products);
      setProductDialog(false);
      setProduct(emptyProduct);
    }
  };

  const editProduct = (product) => {
    setProduct({ ...product });
    setProductDialog(true);
  };

  const confirmDeleteProduct = (product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const deleteProduct = () => {
    let _products = products.filter((val) => val.id !== product.id);

    setProducts(_products);
    setDeleteProductDialog(false);
    setProduct(emptyProduct);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Product Deleted",
      life: 3000,
    });
  };

  const findIndexById = (id) => {
    let index = -1;

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const createId = () => {
    let id = "";
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return id;
  };

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true);
  };

  const deleteSelectedProducts = () => {
    let _products = products.filter((val) => !selectedProducts.includes(val));

    setProducts(_products);
    setDeleteProductsDialog(false);
    setSelectedProducts(null);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Products Deleted",
      life: 3000,
    });
  };

  const onCategoryChange = (e) => {
    let _product = { ...product };

    _product["category"] = e.value;
    setProduct(_product);
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _product = { ...product };

    _product[`${name}`] = val;

    setProduct(_product);
  };

  const onInputNumberChange = (e, name) => {
    const val = e.value || 0;
    let _product = { ...product };

    _product[`${name}`] = val;

    setProduct(_product);
  };

  const leftToolbarTemplate = () => {
    return <div className="flex flex-wrap gap-2"></div>;
  };

  const rightToolbarTemplate = () => {
    return (
      <Button
        label="Export"
        icon="pi pi-upload"
        className="p-button-help"
        onClick={exportCSV}
      />
    );
  };

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={`../image/${rowData.image}`}
        alt={rowData.image}
        className="shadow-2 border-round"
        style={{ width: "64px" }}
      />
    );
  };

  const priceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.price);
  };

  const ratingBodyTemplate = (rowData) => {
    return <Rating value={rowData.rating} readOnly cancel={false} />;
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <Tag
        value={rowData.inventoryStatus}
        severity={getSeverity(rowData)}
      ></Tag>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          className="mr-2"
          onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </React.Fragment>
    );
  };

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">Reservas realizadas de hoteles</h4>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
    </div>
  );
  const productDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
    </React.Fragment>
  );
  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteProduct}
      />
    </React.Fragment>
  );
  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteSelectedProducts}
      />
    </React.Fragment>
  );

  return (
    <div>
      <div>
        <Toast ref={toast} />
        <div className="card">
          <Toolbar
            className="mb-4"
            left={leftToolbarTemplate}
            right={rightToolbarTemplate}
          ></Toolbar>

          <DataTable
            ref={dt}
            value={products}
            selection={selectedProducts}
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            dataKey="id"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            globalFilter={globalFilter}
            header={header}
          >
            <Column selectionMode="multiple" exportable={false}></Column>
            <Column
              field="name"
              header="Nombres"
              sortable
              style={{ minWidth: "8rem" }}
            ></Column>
            <Column
              field="lastname"
              header="Apellidos"
              sortable
              style={{ minWidth: "8rem" }}
            ></Column>
            <Column
              field="hotel"
              header="Nombre de Hotel"
              sortable
              style={{ minWidth: "14rem" }}
            ></Column>
             <Column
              field="habitacion"
              header="Descripción de la habitación"
              sortable
              style={{ minWidth: "16rem" }}
            ></Column>
            <Column
              field="dateini"
              align="center"
              header="Fecha de Ingreso"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="dateend"
              align="center"
              header="Fecha de Salida"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="idroom"
              align="center"
              header="N° Cuarto"
              sortable
              style={{ minWidth: "8rem" }}
            ></Column>
            <Column
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: "12rem" }}
            ></Column>
          </DataTable>
        </div>

        <Dialog
          visible={productDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header="Detalles de Hotel"
          modal
          className="p-fluid"
          footer={productDialogFooter}
          onHide={hideDialog}
        >
          <div className="field">
            <label htmlFor="name" className="font-bold">
              Nombres
            </label>
            <InputText
              id="name"
              value={product.name}
              onChange={(e) => onInputChange(e, "name")}
              required
              className={classNames({
                "p-invalid": submitted && !product.name,
              })}
            />
            {submitted && !product.name && (
              <small className="p-error">Nombres es requerido.</small>
            )}
          </div>
          <div className="field">
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
              <small className="p-error">Apellido es requerido.</small>
            )}
          </div>
          <div className="field">
            <label htmlFor="hotel" className="font-bold">
              Nombre de Hotel
            </label>
            <InputText
              id="hotel"
              value={product.hotel}
              onChange={(e) => onInputChange(e, "hotel")}
              required
              className={classNames({
                "p-invalid": submitted && !product.hotel,
              })}
            />
            {submitted && !product.hotel && (
              <small className="p-error">Nombre de hotel es requerido</small>
            )}
          </div>
          <div className="field">
            <label htmlFor="habitacion" className="font-bold">
              Descripción de habitación
            </label>
            <InputText
              id="hotel"
              value={product.habitacion}
              onChange={(e) => onInputChange(e, "habitacion")}
              required
              className={classNames({
                "p-invalid": submitted && !product.habitacion,
              })}
            />
            {submitted && !product.habitacion && (
              <small className="p-error">Habitación es requerido</small>
            )}
          </div>
          <div className="field">
            <label htmlFor="idroom" className="font-bold">
              N° de cuarto
            </label>
            <InputText
              id="idroom"
              value={product.idroom}
              onChange={(e) => onInputChange(e, "idroom")}
              required
              className={classNames({
                "p-invalid": submitted && !product.idroom,
              })}
            />
            {submitted && !product.idroom && (
              <small className="p-error">N° de cuarto es requerido</small>
            )}
          </div>
          <div className="formgrid grid">
            <div className="field col">
              <label htmlFor="dateini" className="font-bold">
                Fecha de Ingreso
              </label>
              <InputText
                id="dateini"
                value={product.dateini}
                onChange={(e) => onInputChange(e, "dateini")}
                required
                className={classNames({
                  "p-invalid": submitted && !product.dateini,
                })}
              />
              {submitted && !product.dateini && (
                <small className="p-error">Fecha de ingreso es requerido</small>
              )}
            </div>
            <div className="field col">
              <label htmlFor="dateend" className="font-bold">
                Fecha de Salida
              </label>
              <InputText
                id="dateend"
                value={product.dateend}
                onChange={(e) => onInputChange(e, "dateend")}
                required
                className={classNames({
                  "p-invalid": submitted && !product.dateend,
                })}
              />
              {submitted && !product.dateend && (
                <small className="p-error">Fecha de salida es requerido</small>
              )}
            </div>
          </div>
        </Dialog>

        <Dialog
          visible={deleteProductDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header="Confirm"
          modal
          footer={deleteProductDialogFooter}
          onHide={hideDeleteProductDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {product && (
              <span>
                Are you sure you want to delete <b>{product.name}</b>?
              </span>
            )}
          </div>
        </Dialog>

        <Dialog
          visible={deleteProductsDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header="Confirm"
          modal
          footer={deleteProductsDialogFooter}
          onHide={hideDeleteProductsDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {product && (
              <span>
                Are you sure you want to delete the selected products?
              </span>
            )}
          </div>
        </Dialog>
      </div>
    </div>
  );
}

/*<Column
              field="phone"
              header="Telefono / Celular"
              sortable
              style={{ minWidth: "4rem" }}
            ></Column>
            <Column
              field="email"
              header="Correo"
              sortable
              style={{ minWidth: "10rem" }}
            ></Column>*/
