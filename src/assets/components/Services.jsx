import React, { useState } from 'react';
import "./styles/Services.css";
import Services1 from "./images/services-img-1.png";
import Services2 from "./images/services-img-2.png";
import Services3 from "./images/services-img-3.png";
import Services4 from "./images/services-img-4.png";
import Vector from "./images/Vector.png";

const Services = () => {
  const [activeTab, setActiveTab] = useState('Residential');

  return (
    <>
      <div className='d-flex align-items-center services-container'>
        <div className='container'>
          <h1 className='services-header'>Our Services</h1>
          <p className="mt-3 services-description">
            Arc Constructions offers a helping hand to businesses and individuals alike, turning visions into thriving spaces.
          </p>
          <div className='d-flex col-4 gap-3 mb-5 mt-3'>
            <button 
              className={`services-button p-2 ${activeTab === 'Residential' ? 'active' : ''}`}
              onClick={() => setActiveTab('Residential')}
            >
              Residential
            </button>
            <button 
              className={`services-button2 p-2 ${activeTab === 'Construction' ? 'active' : ''}`}
              onClick={() => setActiveTab('Construction')}
            >
              Construction
            </button>
          </div>

          <div className='d-flex gap-5'>
            <div className="services-inner-con d-flex flex-column justify-content-center align-items-center gap-3">
              <img src={Services1} alt="Land Banking" className="services-img" />
              <h2 className="services-inner-text">Land Banking</h2>
            </div>
            <div className="services-inner-con d-flex flex-column justify-content-center align-items-center gap-3">
              <img src={Services2} alt="Industrial Parks" className="services-img" />
              <h2 className="services-inner-text">Industrial Parks</h2>
            </div>
            <div className="services-inner-con d-flex flex-column justify-content-center align-items-center gap-3">
              <img src={Services3} alt="Business Parks" className="services-img" />
              <h2 className="services-inner-text">Business Parks</h2>
            </div>
            <div className="services-inner-con d-flex flex-column justify-content-center align-items-center gap-3">
              <img src={Services4} alt="Residential Spaces" className="services-img" />
              <h2 className="services-inner-text">Residential Spaces</h2>
            </div>
          </div>
          <div>
        <button className='bg-light border-1 p-3 mt-4 services-button-end'>Know More &nbsp;&nbsp; &nbsp;&nbsp;
              <span>
                <img src={Vector} className="vector" alt="Know more icon" />
              </span></button>
              </div>
        </div>


      </div>
      
    </>
  );
};

export default Services;
