import React from 'react'
import logo from './images/logo.svg'
import { Link } from 'react-router-dom'
import '../Styles/Footer.css'
const Footer = () => {
    return (
        <div className='container-fluid mt-0'>
            <div className='footer'>
            <div className='row'>
                <div className='col-md-3  d-flex justify-content-start'>
                    <Link to='/' className='logo'><img src={logo}></img></Link>
                </div>

                <div className='col-md-5  d-flex justify-content-center'>
                    <p>© 2023 Freelancer - Phlox Elementor WordPress Theme. All rights reserved.</p>
                </div>
                <div className='col-md-4  d-flex justify-content-center'>
                    <div className='row socialIcons'>
                      <div className='socialIcon d-flex justify-content-center mr-4'>
                      <i class="fa-brands fa-facebook"></i>
                      
                      </div>
                      <div className='socialIcon d-flex justify-content-center mr-4'>
                      <i class="fa-brands fa-twitter"></i>
                      
                      </div>
                      <div className='socialIcon d-flex justify-content-center mr-4'>
                      <i class="fa-brands fa-linkedin"></i>
                      
                      </div>
                      <div className='socialIcon d-flex justify-content-center mr-4'>
                      <i class="fa-brands fa-github"></i>
                      
                      </div>
                      </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer