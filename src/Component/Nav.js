import React, { useEffect, useRef } from 'react'
import logo from './images/logo.svg'
import { Link, useLocation } from 'react-router-dom'
import "../Styles/Nav.css"
import bars from './images/menu-regular-24.png'
import cross from './images/x-regular-24.png'



const Nav = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  let location = useLocation();
  useEffect(() => {
    console.log(location)
  }, [location])
  return (

    
      <header>
        <h3><img src={logo} /></h3>
        <nav ref={navRef}>
          <Link className={` ${location.pathname === "/" ? "active" : ""}`} to='/' >Home</Link>
          <Link className={` ${location.pathname === "/portfolio" ? "active" : ""}`} to='/portfolio' >Portfolio</Link>
          <Link className={` ${location.pathname === "/contact" ? "active" : ""}`} to='/contact' >Contact</Link>
          <button className='nav-btn nav-close-btn' onClick={showNavbar} >
            <img src={cross} />

          </button>
        </nav>
        <div className='d-flex justify-content-end header1' data-aos="fade-left">
          <div className='socialNavIcon d-flex justify-content-center mr-5'>
            <i className="fa-regular fa-address-card 3x"></i>

          </div>
          <div>
            <button className='navButton'>Contact Us</button>
          </div>
        </div>



        <button className='nav-btn ' onClick={showNavbar}>
          <img src={bars} />
        </button>


      </header>





   
  )
}

export default Nav