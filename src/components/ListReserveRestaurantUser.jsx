import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ReserveServiceRestaurantUser } from "../service/ReserveServiceRestaurantUser";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import axios from "axios";

export default function ListReserveRestaurantUser() {
  let emptyProduct = {
    id: null,
    restaurant: "",
    name: "",
    lastname: "",
    phone: "",
    email: "",
    dateini: "",
    dateend: "",
    numdish: "",
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
    ReserveServiceRestaurantUser.getProducts().then((data) =>
      setProducts(data)
    );
  }, []);*/

  //Funcion get para listar hoteles
  React.useEffect(() => {
    axios.get("http://localhost:8087/reserves_restaurant").then((response) => {
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
      <h4 className="m-0">Reservas realizadas en restaurantes</h4>
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
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="lastname"
              header="Apellidos"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="restaurant"
              header="Nombre de restaurante"
              sortable
              style={{ minWidth: "16rem" }}
            ></Column>
            <Column
              field="dish"
              header="Menú"
              sortable
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="dateini"
              align="center"
              header="Fecha de Consumo"
              sortable
              style={{ minWidth: "14rem" }}
            ></Column>
            <Column
              field="numdish"
              align="center"
              header="Cantidad de Platos"
              sortable
              style={{ minWidth: "4rem" }}
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
          header="Detalle de reserva de restaurante"
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
            <label htmlFor="description" className="font-bold">
              Apellidos
            </label>
            <InputText
              id="lastname"
              value={product.lastname}
              onChange={(e) => onInputChange(e, "name")}
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
            <label htmlFor="restaurant" className="font-bold">
              Nombre del restaurante
            </label>
            <InputText
              id="restaurant"
              value={product.restaurant}
              onChange={(e) => onInputChange(e, "restaurant")}
              required
              className={classNames({
                "p-invalid": submitted && !product.restaurant,
              })}
            />
            {submitted && !product.restaurant && (
              <small className="p-error">Nombre de hotel es requerido.</small>
            )}
          </div>
          <div className="field">
            <label htmlFor="dish" className="font-bold">
              Menú
            </label>
            <InputText
              id="dish"
              value={product.dish}
              onChange={(e) => onInputChange(e, "dish")}
              required
              className={classNames({
                "p-invalid": submitted && !product.dish,
              })}
            />
            {submitted && !product.dish && (
              <small className="p-error">Platillo es requerido.</small>
            )}
          </div>
          <div className="field">
            <label htmlFor="numdish" className="font-bold">
              Cantidad de platos
            </label>
            <InputText
              id="numdish"
              value={product.numdish}
              onChange={(e) => onInputChange(e, "numdish")}
              required
              className={classNames({
                "p-invalid": submitted && !product.numdish,
              })}
            />
            {submitted && !product.numdish && (
              <small className="p-error">Numero de platos es requerido</small>
            )}
          </div>
          <div className="formgrid grid">
            <div className="field col">
              <label htmlFor="dateini" className="font-bold">
                Fecha de consumo
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
                <small className="p-error">Apellido es requerido.</small>
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


