import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'
// import Style from '../Components/Style'

function MainLayout() {
  return (
    <div >
        <Navbar />
        <div className=' min-h-[calc(100vh-326px)]'>
        {
            <Outlet />
        }
        </div>
         <Footer />
    </div>
  )
}

export default MainLayout
