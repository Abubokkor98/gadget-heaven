import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function MainLayout() {
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
