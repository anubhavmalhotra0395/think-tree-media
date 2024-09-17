import React from 'react'
import "./styles/Navbar.css"
import Logo from "./images/logo.png"

const Navbar = () => {
    return (
        <div className='mt-5 d-flex align-items-center w-100  px-2'>
            <div className='navbar-con container bg-light w-100 rounded-4 mt-3 d-flex justify-content-between'>
                <div className='ps-3'>
                    <img src={Logo} className="logo" />
                </div>

                <div className='d-flex justify-space-around align-items-center text-center gap-5 me-3'>
                    <p className='m-0'>Our Story</p>
                    <p className='m-0'>Projects</p>
                    <button className="btn btn-light border-dark px-4 py-3 rounded-4">Get in touch</button>
               </div>
            </div></div>
    )
}

export default Navbar