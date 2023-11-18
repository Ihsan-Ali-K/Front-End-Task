import React from 'react'
import p1Image from './images/portfolio-1-img.jpg'
import { Link } from 'react-router-dom'
import '../Styles/DetailsCard.css'
import Footer from './Footer'
import Nav from './Nav'
import CardDeal from './CardDeal'

const DetailsCard = () => {
  return (
    <>
    <Nav />
    <div className="container-fluid ">
            
            <div className="detailsCard row d-flex flex-wrap-reverse mt-5 ">
                <div className="col-md-6 ">
                    <img src={p1Image} />

                </div>
                <div className="col-md-6 ">

                    <div className='details ' >
                        
                        
                        <div></div>
                        <h1 className="mt-2">Branding Nice Studio</h1>

                        <p className="mt-5 mb-5">I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because those who do not know how to pursue pleasure rationally</p>
                        <div className='row DCIcons '>
                          <div className='socialIcon d-flex justify-content-center ' >
                        <i className="fa-solid fa-heart fa-xl" ></i>
                        </div>
                        <h2 className='d-flex align-items-center' >Likes(51)</h2>
                        <div className='socialIcon d-flex justify-content-center  ml-3' >
                        <i className="fa-solid fa-share-nodes fa-2x"></i>
                        </div>
                        <h2 className='d-flex align-items-center' >Share</h2>
                        </div>
                    </div>
                </div>
            </div>
            <CardDeal />

        </div>
    <Footer />
    </>
  )
}

export default DetailsCard