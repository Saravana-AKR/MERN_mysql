import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


const Portal = () => {
  return (
    <>
    <h1>portal</h1>
     <Header/>
     <Sidebar/>
     <Outlet/>
     <Footer/>

        
   </>
  )
}

export default Portal