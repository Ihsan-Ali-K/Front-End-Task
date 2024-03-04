import React from 'react'

import Footer from './Footer'

import '../Styles/Contact.css'
import Nav from './Nav'

const Contact = () => {
    return (
        <>
            <Nav />
            <div className='container-fluid'>
                <div className="contactMe row mb-5">
                    <div className="col-md-6 mt-5">
                        <div className=" mt-5">
                            <div className="mt-5 ">
                                <h5  data-aos="fade-up">--Contact Me</h5>
                            </div>
                            <h1 className="mt-2" data-aos="fade-up">Get In Touch With Me</h1>

                            <p className="mt-5 mb-5" data-aos="fade-up">The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert Factual knowledge is less prized when everything you ever need to know can be found at doing everything.</p>
                            <div>
                                <div className='row phone' data-aos="fade-left">
                                    <div className='phoneIcon  d-flex justify-content-center align-items-center mx-3'>
                                    <i className="fa-solid fa-phone-volume fa-2x"></i>
                                    </div>
                                    <div>
                                    <h4>Phone</h4>
                                    <p className='my-0'>32423482934</p>
                                    <p className='my-0'>54334535555</p>
                                    </div>

                                </div>
                                <div className='row email'  data-aos="fade-left">
                                    <div className='envelope d-flex justify-content-center align-items-center mx-3'>
                                        <i className="fa-regular fa-envelope fa-2x"></i>
                                    </div>
                                    <div>
                                        <h4 >Email</h4>
                                        <p className='my-0'>asdfhdsf@gmail.com</p>
                                        <p className='my-0'>sahisahsi@gmail.com</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className='row cForm' data-aos="fade-up">
                            <div className="mb-3 mx-3">

                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                            </div>
                            <div className="mb-3">

                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                            </div>
                        </div>
                        <div className="mb-3 mt-5" data-aos="fade-up">

                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Your Message*"></textarea>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact