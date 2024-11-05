import React, { createContext, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

export const ProductContext = createContext();

export default function MainLayout() {
  const [cartArray, setCartArray] = useState([]);
  return (
    <div className="max-w-screen-xl mx-auto">
    {/* Navbar */}
      <Navbar></Navbar>

      {/* Dynamic content */}
      <Outlet></Outlet>
      
    {/* Footer */}
    <Footer></Footer>
  </div>
  )
}
