import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBare from '../Component/SideBare/SideBare'
import Header from '../Component/Header/Header'

const Layout = () => {
  return (
    <div>
      <Header />

<div className='flex'>
    <SideBare />
      <Outlet />
   
</div>
    </div>
  )
}

export default Layout


