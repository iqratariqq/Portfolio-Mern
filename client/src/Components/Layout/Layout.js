import React from 'react'
import Homepage from '../../Pages/Home/Homepage'
import './Layout.css'; 
import Menu from '../Menu/Menu';

const Layout = () => {
  return (
    <>
    <div className="Layout">
      <div className="sidebar-section">
        <div className="sidebar">
          <div className="logo">
            <img src="/ITlogo.png" alt="IT Logo" className="logo-img" />
          </div>
          <Menu></Menu>
          </div>
        </div>
        <Homepage/>

      </div>
     
    </>
  )
}
export default Layout
