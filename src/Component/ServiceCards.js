import React from 'react'
import "../Styles/ServiceCards.css"
const ServiceCards = () => {
  return (
    <div className='container-fluid mt-0'>
      <div className='row d-flex flex-wrap-reverse no-gutters' style={{ margin: '0' }}>
        <div className='col-md-8 d-flex justify-content-center'>
          <div className='container'>
            <div className='row no-gutters' style={{ margin: '0' }}>
              <div className='col-md-6 d-flex justify-content-center'>
                <div className='card' data-aos="zoom-out">
                  <div className='content'>
                    <div>
                    <i class="fa-solid fa-crop-simple fa-4x"></i>
                    </div>
                    <div>
                      <h4>Product Design</h4>
                      <h6>The technical revolution is changing aspect</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 d-flex justify-content-center'>
                <div className='card' data-aos="zoom-out">
                  <div className='content'>
                  <div>
                      <i className="fa-brands fa-product-hunt fa-4x"></i>
                    </div>
                    <div>
                      <h4>Product Design</h4>
                      <h6>The technical revolution is changing aspect</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 d-flex justify-content-center'>
                <div className='card' data-aos="zoom-out">
                  <div className='content'>
                  <div>
                      <i className="fa-brands fa-product-hunt fa-4x"></i>
                    </div>
                    <div>
                      <h4>Product Design</h4>
                      <h6>The technical revolution is changing aspect</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 d-flex justify-content-center'>
                <div className='card' data-aos="zoom-out">
                  <div className='content'>
                  <div>
                  <i class="fa-solid fa-wand-magic-sparkles fa-4x"></i>
                    </div>
                    <div>
                      <h4>Product Design</h4>
                      <h6>The technical revolution is changing aspect</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className='col-md-4' >
          <div className='myskills ' >
            <section className=''>
          <h4 data-aos="zoom-out">--My skills</h4>
          <h1 data-aos="zoom-out">Why Hire Me For Next Project?</h1>
          </section>
          <p data-aos="zoom-out">The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
          </div>
          <button className='navButton'>Contact Us</button>

        </div>
      </div>

    </div>
  )
}

export default ServiceCards