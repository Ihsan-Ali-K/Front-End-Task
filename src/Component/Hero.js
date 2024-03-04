import React from 'react'
import "../Styles/Hero.css"
import heroImg from "./images/hero-img.png"


const Hero = () => {


    return (

        <div className='container-fluid '>
            <div className='hero mr-2'>
                <div className='row'>
                    <div className='col-md-6'>
                        <section className='' data-aos="fade-down">
                            <div data-aos="zoom-in">
                                <h5  >--Introducing</h5>
                            </div>
                            <h1>Hello </h1>
                            <h3>I am Jessy Walter</h3>
                        </section>
                        <p data-aos="fade-down">
                            Since beginning my journey as a freelance designer nearby 7 years ago, I 've done remote work for agencies, consulted for startup, and collaborated with talented people to create digital products.
                        </p>
                        <button className='navButton'>Contact Us</button>
                    </div>
                    <div className='col-md-6 d-flex justify-content-center position-relative'>
                        <div className=' bigCircle' data-aos="fade-up">

                        </div>
                        <div className='position-absolute top-0' data-aos="fade-up">
                            <img src={heroImg} className='img-fluid' />
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero