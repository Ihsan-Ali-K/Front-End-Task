import React from 'react'
import Timage from './images/testimonials-img.jpg'
import Timage2 from './images/testi21.png'
import '../Styles/Testimonials.css'

const Testimonials = () => {
  return (
    <div className='container-fluid mt-0'>
      <div className='Testimonials'>
      <div className='row'>
        <div className='col-md-12'>
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button " data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active  mr-2" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className='mt-5 testimonials'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='d-flex justify-content-end mr-5 pImage'>

                        <img src={Timage} />

                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='qImage'>
                        <i className="fa-solid fa-quote-left fa-5x" id='quotes' style={{ color: "#64f4ab" }}></i>

                      </div>
                      <p>
                        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!
                      </p>
                      <h3>Jared Warner</h3>
                      <h4>CEO of Figma</h4>

                    </div>

                  </div>

                </div>

              </div>
              <div className="carousel-item active">
                <div className='mt-5 testimonials'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='d-flex justify-content-end mr-5 pImage'>

                        <img src={Timage2} />

                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='qImage'>
                        <i className="fa-solid fa-quote-left fa-5x" id='quotes' style={{ color: "#64f4ab" }}></i>

                      </div>
                      <p>
                        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!
                      </p>
                      <h3>Women Diana</h3>
                      <h4>CEO of Figma</h4>

                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Testimonials