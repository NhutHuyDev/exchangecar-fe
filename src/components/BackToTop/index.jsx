import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import './BackToTop.css'

function BackToTop() {
    const [backToTop, setBackToTop] = useState(false)
    useEffect(() => {

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackToTop(true)
            }
            else {
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            {
                backToTop && (
                    <FontAwesomeIcon
                        className='position-fixed fs-4 text-light back-to-top'
                        style={{ padding: '13px 16px', bottom: '80px', right: '20px', borderRadius: '25%', zIndex: 9999, cursor: 'pointer', backgroundColor: '#2c5587' }}
                        icon={faArrowUp}
                        onClick={scrollUp} />

                )
            }

            <span className='position-fixed contact-icon' style={{ bottom: '20px', right: '20px', backgroundColor: 'rgb(44, 85, 135)', borderRadius: '25%', height: '50px', zIndex: 9999, width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Link to="">
                    <img src="/img/car-detail/car-detail-icon/zalo.svg" alt="" />
                </Link>
            </span>
        </div>
    )
}

export default BackToTop