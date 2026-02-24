import React from 'react'

import logo from "./../../assets/photos/logo-GdqARQRt.png"
import { NavLink } from 'react-router-dom'


export function Navbar() {



  return (
    <>



      <nav className="navbar navbar-expand-lg navbar-light fixed-top  nav-col">
        <div className="container ">


          <div className="d-flex align-items-center">
            <NavLink className="navbar-brand " to='/'>

              <div className="d-flex  text-white gap-2 logo">
                <img src={logo} className='ss' alt="" />
                <span className="d-block">
                  عدسة
                  <span className="d-block yellow-color" > عالم التصوير الفوتوغرافي</span>
                </span>
              </div>


            </NavLink>
          </div>
          <div
            className="collapse navbar-collapse position-absolute start-50 translate-middle-x"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  rounded-5 p-2 px-4 gap-1">
              <li className="nav-item">
                <NavLink className="nav-link  text-white " to="/Home">الرئيسية</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/blog">المدونة</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/info">من نحن</NavLink>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center gap-3">
            <i className="fa-solid fa-magnifying-glass text-white-50 fs-5 search-icon"></i>
            <button
              type="button"
              className="btn btn-lg or-color text-white fs-6 rounded-4"
            >
              ابدأ القراءة
            </button>
          </div>


        </div>
      </nav>


    </>
  )
}
