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
}

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
