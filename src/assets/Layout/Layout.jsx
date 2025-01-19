// import { Footer } from 'flowbite-react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../../Comps/Nav/Nav'
import Footer from '../../Comps/Footer/Footer'

export default function Layout() {
  return <>
  <Nav/>
  <Outlet/>
  <Footer/>
  </>
}
