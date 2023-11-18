import React from 'react'

import Hero from '../Component/Hero'
import ServiceCards from '../Component/ServiceCards'
import Project1 from '../Component/Project1'
import Project2 from '../Component/Project2'
import Project3 from '../Component/Project3'
import Stats from '../Component/Stats'
import Testimonials from '../Component/Testimonials'
import CardDeal from '../Component/CardDeal'
import Footer from '../Component/Footer'
import BackToTopButton from '../Component/BackToTopButton'
import Nav from '../Component/Nav'



const Home = () => {
  return (
    <div>
      
       <Nav />
        <Hero />
        <ServiceCards />
        <Project1 />
        <Project2 />
        <Project3 />
        <Stats />
        <Testimonials />
        <CardDeal />
        <Footer />
        
    </div>
  )
}

export default Home