import React from "react";
import "./styles/AboutUs.css";
import Vector from "./images/Vector.png";
import About1 from "./images/about-img-1.png";
import About2 from "./images/about-img-2.png";
import About3 from "./images/about-img-3.png";
import About4 from "./images/about-img-4.png";

const images = [About1, About2, About3, About4];

const AboutUs = () => {
  return (
    <div className="bg-white about-container">
      <div className="container d-flex gap-3 justify-content-center">
        <div className="col-6 d-flex flex-column gap-4 justify-content-center">
          <small className="about-text-small">About Us</small>
          <h1 className="about-text">
            Building dreams,<br /> brick by brick, since the 1960s.
          </h1>
          <p className="about-description">
            Since the 1960s, we've been building in Bengaluru, starting with
            handmade bricks and tiles. Today, we construct everything from cosy
            homes to busy business centres using steel and glass. We're a
            dedicated and family-oriented team, using the latest tools while
            staying true to our roots.
          </p>
          <button className="about-button bg-white py-3">
            Know More &nbsp;&nbsp; &nbsp;&nbsp;<span><img src={Vector} className="vector" alt="Know more icon" /></span>
          </button>
        </div>


        <div className="col-6 d-flex flex-wrap gap-3 justify-content-center">
          {images.map((img, index) => (
            <div
              key={index}
              className={`image-wrapper d-flex justify-content-center ${index % 2 === 1 ? "mt-5" : ""}`} 
            >
              <img src={img} alt={`About Image ${index + 1}`} className="about-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
