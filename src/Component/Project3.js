import React from 'react'
import { Link } from 'react-router-dom'
import p3Image from './images/portfolio-3-img.jpg'
import '../Styles/Project3.css'
const Project3 = () => {
    return (
        <>
        <div className="container-fluid mt-0 ">
            <div className='d-flex justify-content-start p3Couter'>
                <div className='p3circle' data-aos="fade-right">

                </div>
            </div>
            <div className="project3 row mb-5">
                <div className="col-md-6 ">
                    <div>

                        <h5  data-aos="zoom-in">--Project 3</h5>

                        <h1 className="mt-2" data-aos="zoom-in">Resturant Landing Page</h1>

                        <p className="mt-5 mb-5" data-aos="zoom-in">The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
                        <div>
                            <Link to="/detailsCard" >Read more</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-5">
                    <img src={p3Image} />
                </div>
            </div>
            <div className='d-flex justify-content-center'>
            <button to="/portfolio" className='viewAll'>View all</button>

            </div>

        </div>
        
        </>
    )
}

export default Project3