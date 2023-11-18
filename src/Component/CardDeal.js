import React from 'react'
import "../Styles/CardDeal.css"
const CardDeal = () => {
    return (
        <div className='container-fluid mt-0'>
            <div className='cardDeal mt-5'>
            <div className='d-flex justify-content-start '>
                <div className='CDCircle1'>

                </div>
            </div>
            <div className=' d-flex justify-content-center '>
            <div class=" horizontal-line"></div>
            </div>
            <div className='mt-3 d-flex justify-content-center  '>
            
                <div >
                    <h1>Lets work together</h1>
                    <p>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn</p>
                    <div className='mt-2 mb-5 d-flex justify-content-center' >
                        <button className='CDButton'>Contact Us</button>

                    </div>
                </div>


            </div>
            <div className='d-flex justify-content-end p2Couter'>
            <div className='CDCircle2'>
              
            </div>
            </div>
            </div>
            
        </div>
    )
}

export default CardDeal