import React, { useState } from 'react'
import '../Styles/Stats.css'
import { animated, useSpring } from 'react-spring'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import image from './images/logo.png'


const Stats = () => {
    const [counterOn, setCounterOn] = useState(false); 
    return (
        <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
        <div className='container-fluid mt-0'>

          
            <div className='stats'>
            <div className='d-flex justify-content-end '>
                <div className='statCircle'>

                </div>
            </div>
                <div className='row statCards'>

                    <div className="card col-md-3 roundedCard">

                        <div className="card-body d-flex flex-col  align-items-center justify-content-center" >
                            <div  data-aos="fade-up">
                                <h1>{counterOn && <CountUp start={0} end={98} duration={3} delay={0} />}  </h1>
                                <h5 className="card-title">Happy clients</h5>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-3">

                        <div className="card-body d-flex flex-col  align-items-center justify-content-center" >
                            <div  data-aos="fade-up">
                            <h1>{counterOn && <CountUp start={0} end={38} duration={3} delay={0} />}  </h1>
                                <h5 className="card-title">Project done</h5>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-3">

                        <div className="card-body d-flex flex-col  align-items-center justify-content-center" >
                            <div data-aos="fade-up">
                            <h1>{counterOn && <CountUp start={0} end={48} duration={3} delay={0} />}  </h1>
                                <h5 className="card-title">Award Wining</h5>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-3 roundedCardLast">

                        <div className="card-body d-flex flex-col  align-items-center justify-content-center" >
                            <div data-aos="fade-up">
                            <h1>{counterOn && <CountUp start={0} end={12} duration={3} delay={0} />}  </h1>
                                <h5 className="card-title">Year Experience</h5>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='d-flex justify-content-start '>
                <div className='statCircle2'>

                </div>
            </div>
            </div>
            
            
        </div>
        </ScrollTrigger>

    )
}

export default Stats