import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import ListHotels from "./components/ListHotels";
import Hotels from "./components/Hotels";
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';   // theme para cambiar de tema
import 'primeflex/primeflex.css';                                   // css utility
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';                       // core css
import './style.css';
import './flags.css';
import Header from './components/Header';
import DetailHotel from './components/DetailHotel';
import ReserveRestaurant from './components/ReserveRestaurant';
import ManageHotel from './components/ManageHotel';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/hotels", element: <Hotels /> },
  { path: "/listhotels", element: <ListHotels /> },
  { path: "/detailhotel", element: <DetailHotel /> },
  { path: "/header", element: <Header /> },
  { path: "/reserverestaurant", element: <ReserveRestaurant /> },
  { path: "/managehotel", element: <ManageHotel /> },
  { path: "*", element: <NotFound /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
