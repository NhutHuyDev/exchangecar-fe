import React from 'react'
import './StickyNav.css'
import { Link } from 'react-router-dom'

function StickyNav() {
    const sticky_section_detail_link = [
        {
            title: "Specifications",
            path: "#overview"
        },
        {
            title: "Commitment",
            path: "#certificate"
        },
        // {
        //     title: "Giá cả",
        //     path: "#price"
        // },
        {
            title: "Relevant Cars",
            path: "#similarcar"
        },
    ]
    return (
        <>
            <div className='px-3 mt-8 xl:mt-12 sticky top-0 z-[9999] bg-[white] shadow-xl'>
                <nav className="navbar sticky-top mx-auto">
                    <ul className='flex justify-between md:justify-center items-center pb-3'>
                        {
                            sticky_section_detail_link.map(item => (
                                <li key={item.path}>
                                    <a className='inline-block text-grey-color-200 hover:text-primary-color text-lg font-bold px-3 md:px-10 py-4' href={item.path}>{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default StickyNav