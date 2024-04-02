import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import ListHotels from "./components/ListHotels";
import ListReserveHotel from "./components/ListReserveHotel";
import ListReserveRestaurant from "./components/ListReserveRestaurant";
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
import Login from './components/Login';
import ListRestaurant from "./components/ListRestaurant";
import ManageRestaurant from './components/ManageRestaurant';
import ManageBoat from './components/ManageBoat';
import ManageUser from './components/ManageUser';
import Restaurants from './components/Restaurants';
import RestaurantsVisitor from './components/RestaurantsVisitor';
import ManageReserve from './components/ManageReserve';
import Boats from './components/Boats';
import ManageHotelAdm from './components/ManageHotelAdm';
import ManageRestaurantAdm from './components/ManageRestaurantAdm';
import ManageBoatAdm from './components/ManageBoatAdm';
import HotelsVisitor from './components/HotelsVisitor';
import BoatsVisitor from './components/BoatsVisitor';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/hotels", element: <Hotels /> },
  { path: "/hotelsvisitor", element: <HotelsVisitor /> },
  { path: "/listhotels", element: <ListHotels /> },
  { path: "/detailhotel", element: <DetailHotel /> },
  { path: "/header", element: <Header /> },
  { path: "/reserverestaurant", element: <ReserveRestaurant /> },
  { path: "/listreservehotel", element: <ListReserveHotel /> },
  { path: "/listreserverestaurant", element: <ListReserveRestaurant /> },
  { path: "/managereserve", element: <ManageReserve /> },
  { path: "/managehotel", element: <ManageHotel /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFound /> },
  { path: "/listrestaurant", element: <ListRestaurant /> },
  { path: "/managerestaurant", element: <ManageRestaurant /> },
  { path: "/manageboat", element: <ManageBoat /> },
  { path: "/manageuser", element: <ManageUser /> },
  { path: "/restaurants", element: <Restaurants /> },
  { path: "/restaurantsvisitor", element: <RestaurantsVisitor /> },
  { path: "/boats", element: <Boats /> },  
  { path: "/boatsvisitor", element: <BoatsVisitor /> },  
  { path: "/managehoteladm", element: <ManageHotelAdm /> },
  { path: "/managerestaurantadm", element: <ManageRestaurantAdm /> },
  { path: "/manageboatadm", element: <ManageBoatAdm /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
