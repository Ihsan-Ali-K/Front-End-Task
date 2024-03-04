import { Link } from "react-router-dom"
import "../Styles/Project1.css"
import p1Image from './images/portfolio-1-img.jpg'
import React from 'react'

const Project1 = () => {
  return (
    <div className="container-fluid mt-0 ">
      <div className="project1 row mb-5">
        <div className="col-md-6 mt-5">
          <div className=" mt-5">
            <div className="mt-5 ">
              <h5 data-aos="fade-up">--Project 1</h5>
            </div>
            <h1 data-aos="fade-up" className="mt-2">Branding Nice Studio</h1>

            <p data-aos="fade-up" className="mt-5 mb-5">The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
            <div>
              <Link to="/detailsCard" >Read more</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5" >
          < img src={p1Image} />
        </div>
      </div>

    </div>
  )
}

export default Project1