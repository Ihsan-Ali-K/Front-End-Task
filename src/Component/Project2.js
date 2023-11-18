import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Project2.css"
import p2Image from './images/portfolio-2-img.jpg'

const Project2 = () => {
    return (
        <div className="container-fluid mt-0">
            <div className='d-flex justify-content-end p2Couter'>
            <div className='p2circle' data-aos="fade-left">
              
            </div>
            </div>
            <div className="project2 row d-flex flex-wrap-reverse ">
                <div className="col-md-6 ">
                    <img src={p2Image} />

                </div>
                <div className="col-md-6 ">

                    <div >
                        
                            <h5 >--Project 2</h5>
                        
                        <h1 className="mt-2">Mobile card app</h1>

                        <p className="mt-5 mb-5">The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
                        <div>
                            <Link to="/detailsCard" >Read more</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Project2