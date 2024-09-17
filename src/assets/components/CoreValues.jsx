import React from 'react'
import "./styles/CoreValues.css"
import Core1 from "./images/core-img-1.png"
import Core2 from "./images/core-img-2.png"
import Core3 from "./images/core-img-3.png"
import Core4 from "./images/core-img-4.png"
import Core5 from "./images/core-img-5.png"
import Core6 from "./images/core-1.png"
import Core7 from "./images/core-2.png"
import Core8 from "./images/core-3.png"

const CoreValues = () => {
  return (
    <div className='core-values-container d-flex '>
        <div className='container'>

<div className='d-flex'>
                <div className='core-inner-con2 col-6'>
                    <h1 className='core-header'>Core <span className='text-light'>Values</span></h1>
                </div>
    <div className='core-inner-con2 col-6'></div>
</div>

<div className='d-flex flex-wrap w-100'>
<div className='col-6 d-flex flex-column gap-2 p-5 core-inner-con'>
<img src={Core1} className='core-img'/>
<h4 className='core-inner-header mt-3'>Commited</h4>
<p className='core-inner-des'>At Arc Constructions, we walk the talk. We don't just build; We Invest. By Developing Properties Ourselves, we pour our heart and soul into delivering on time and within budget. It's a personal commitment, etched in every brick and beam.</p>
</div>
<div className='col-6 d-flex flex-column gap-2 p-5 core-inner-con'>
<img src={Core2} className='core-img'/>
<h4 className='core-inner-header mt-3'>Inspired</h4>
<p className='core-inner-des'>We don't see empty lots, We See Possibilities. We're Not Just Builders, We're Architects of Transformation. We Breathe New Life Into Assets, Shape Communities, and Unlock Real Value In Places</p>
</div>
<div className='col-6 d-flex flex-column gap-2 p-5 core-inner-con'>
<img src={Core3} className='core-img'/>
<h4 className='core-inner-header mt-3'>People Centric</h4>
<p className='core-inner-des'>We build more than homes; We Build The Foundation For Thriving Families. It's Not Just About Walls, It's About Fostering Communities Where Comfort and Spirit Flourish.</p>
</div>
<div className='col-6 d-flex flex-column gap-2 p-5 core-inner-con'>
<img src={Core4} className='core-img'/>
<h4 className='core-inner-header mt-3'>Efficient</h4>
<p className='core-inner-des'>Functionality Isn't a Burden, It's Our Artistic Signature. We Craft Spaces With Visual Integrity, Maximising Every Square Foot Without Sacrificing Aesthetics.</p>
</div>
<div className='col-6 d-flex flex-column gap-2 p-5 core-inner-con'>
<img src={Core5} className='core-img'/>
<h4 className='core-inner-header mt-3'>Transparent</h4>
<p className='core-inner-des'>Honesty Isn't a Tagline, It's Our Way Of Life. From Clear Communication to Open Processes, We Believe in Building Trust, Brick By Transparent brick. Client Testimonials Speak Louder Than Words, Budgets Are Demystified, and Progress unfolds Openly.</p>
</div>

<div className='col-6 d-flex flex-column gap-2 p-5 core-inner-con5'>

</div>

<div className='col-6 d-flex flex-column gap-2 core-inner-con3  justify-content-end'>
<form className='bg-white w-100 form-container'>
  <div class="form-group">

    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
  
  </div>
  <div class="form-group">

    <input type="email" class="form-control"  placeholder="Email"/>
  </div>
  <div class="form-group">
  <input type="phone" class="form-control"  placeholder="Phone"/>

  </div>

  <div class="form-group">
  <textarea class="form-control2" placeholder="Message"/>


  </div>
  <div className='form-group mt-5'>
  <button type="submit" class="form-btn form-control">Submit</button>
  </div>
</form>
</div>

<div className='col-6 d-flex flex-column gap-2 py-5 core-inner-con4 justify-content-end pe-4'>
    <h3 className='core-end-header'>Contact us</h3>
    <h1 className='core-end-header2'>Let's Get In Touch</h1>
    <p className='core-end-text'>Fill in the form to know more about our services, our team will reach out to you soon!</p>
    <div className='d-flex  flex-wrap gap-3 core-end-main-con'>
        <div className='d-flex col-5 justify-content-center text-center align-items-center' style={{width:"42%"}}>
            <div className='col-3 inner-core-end  py-2'>
                <img src={Core6} className="core-end-img"/>
            </div>
            <div className='col-9 d-flex flex-column py-2 text-center bg-light'>
                <p className='core-end-text2 m-0'>Calling Support</p>
                <p className='core-end-text3 mt-2'>(+62)81 235 26512</p>
            </div>
        </div>
        <div className='d-flex justify-content-center text-center align-items-center' style={{width:"54%"}}>
            <div className='col-3 inner-core-end  py-2'>
                <img src={Core7} className="core-end-img2"/>
            </div>
            <div className='col-9 d-flex flex-column py-2 text-center bg-light'>
                <p className='core-end-text2 m-0'>Email Information</p>
                <p className='core-end-text3 mt-2'>support@arcconstruction.com</p>
            </div>
        </div>
        <div className='d-flex justify-content-center text-center align-items-center' style={{width:"42%"}}>
            <div className='col-3 inner-core-end  py-2'>
                <img src={Core8} className="core-end-img"/>
            </div>
            <div className='col-9 d-flex flex-column py-2 text-center bg-light'>
                <p className='core-end-text2 m-0'>Office Location</p>
                <p className='core-end-text3 mt-2'>Indiranagar</p>
            </div>
        </div>
        <div className='d-flex col-5 justify-content-center text-center align-items-center'>
           
        </div>
    </div>
</div>
</div>


        </div>
    </div>
  )
}

export default CoreValues