import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

export  function Layout() {
  return (
    <>
      <Navbar/>
     <Outlet/>
     <Footer/>
    </>
  )
}

//#F97316------#000000---#0A0A0A-----#111111------#161616-------#262626
