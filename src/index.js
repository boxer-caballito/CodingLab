import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Cabezera from './Components/Header';
import About from './Components/About';
import Marcas from './Components/marcas';
import Footer from './Components/Footer';
import Tarea from "./Components/tarea"
import Home from './Components/home';
import Construccion from './Components/Construccion';
import Info from './Components/Info';
import Calculator from './Components/calculator';
import ZonaJuego from './Components/ZonaJuegos';

const router = createBrowserRouter([
  {
  path: "/",
  element: <App/>
},
{
  path: "/homeworks",
  element: <Home/>
},
{
path: "/*",
element: <Construccion/>
}, 
{
path: "/about",
element: <Info/>
}, 
{
  path: "/Calculator",
  element: <Calculator/>
},
{
  path: "/GameZone",
  element: <ZonaJuego/>
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
