import React, { useEffect, useState } from 'react'
import '../Styles/BackToTop.css'

const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            }
            else {
                setBackToTopButton(false)
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className='backToTop '>
            {backToTopButton && (
                <button className='button d-flex justify-content-center' onClick={scrollUp}>
                    <i class="fa-solid fa-arrow-up fa-2xs"></i>
                </button>
            )}
        </div>
    )
}

export default BackToTopButton