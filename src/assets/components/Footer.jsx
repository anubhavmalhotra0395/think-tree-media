import React from 'react'
import Logo from './images/logo.png'
import "./styles/Footer.css"
import SocialIcon1 from "./images/footer-img-1.png"
import SocialIcon2 from "./images/footer-img-2.png"
import SocialIcon3 from "./images/footer-img-3.png"
import SocialIcon4 from "./images/footer-1.png"
import SocialIcon5 from "./images/footer-2.png"
import SocialIcon6 from "./images/footer-2.png"

const Footer = () => {
  return (
    <>
    <div className='bg-white d-flex align-items-center flex-column py-5'>
    <div className='container d-flex justify-content-between'>
    <div>
        <img src={Logo} className="logo"/>
    </div>
    <div className='d-flex gap-3 mid-social align-items-center'>
        <p className='footer-text'>Our Story</p>
        <p className='footer-text'>Projects</p>
        <p className='footer-text'>Contact</p>
    </div>
    <div className='d-flex social-main-con gap-2'>
        <p className='footer-text2 d-flex align-items-center mt-2'>Stay Connected</p>
        <div className='d-flex gap-3'>
            <div className='social-container'>
                <img src={SocialIcon1}/>
            </div>
        </div>
        <div className='d-flex gap-3'>
            <div className='social-container'>
                <img src={SocialIcon2}/>
            </div>
        </div>
        <div className='d-flex gap-3'>
            <div className='social-container'>
                <img src={SocialIcon3}/>
            </div>
        </div>
    </div>
    </div>

    <div className='container d-flex justify-content-between mt-4'>
<div className='border-footer'></div>
        </div>

        <div className='container d-flex justify-content-between mt-4'>
<div className='d-flex gap-3 '>
    <div className='d-flex gap-1 footer-last-con'>
    <img src={SocialIcon4} className="footer-last-img"/>
    <p className='footer-last-text'>hello@arcconstructions.com</p>
    </div>
    <div className='d-flex gap-1 footer-last-con'>
    <img src={SocialIcon5} className="footer-last-img"/>
    <p className='footer-last-text'>+91 91813 23 2309</p>
    </div>
    <div className='d-flex gap-1 footer-last-con'>
    <img src={SocialIcon6} className="footer-last-img"/>
    <p className='footer-last-text'>Location</p>
    </div>
</div>

<div>
    <p className='footer-last-text'>© 2024 ARC Constrtuctions. All rights reserved.</p>
</div>

</div>
    </div>
    </>
  )
}

export default Footer