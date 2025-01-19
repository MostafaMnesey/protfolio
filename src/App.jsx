import React from 'react'
import Nav from './Comps/Nav/Nav'
import './app.css'
import 'flowbite';
import Footer from './Comps/Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.css';
import Home from './Comps/Home/Home';
import About from './Comps/About/About';
import Contact from './Comps/Contact/Contact';
import Gallary from './Comps/Gallary/Gallary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './assets/Layout/Layout';

const router = createBrowserRouter([
 {path:'',element:<Layout/>,children:[
  {index:true ,element:<Home/>},
  {path:'about' ,element:<About/>},
  {path:'contact' ,element:<Contact/>},
  {path:'gallary' ,element:<Gallary/>},
 ]
 }
])
export default function App() {
  return <>
  <RouterProvider  router={router}/>
  </>
}
