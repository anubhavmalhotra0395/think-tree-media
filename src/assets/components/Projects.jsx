import React, { useRef } from "react";
import Slider from "react-slick";
import "./styles/Projects.css";
import Projects1 from "./images/projects-img-1.png";
import Projects2 from "./images/projects-img-2.png";
import ProjectsNext from "./images/projects-next.png";
import ProjectsPrev from "./images/projects-prev.png";
import Vector from "./images/Vector.png";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-next visibility-hidden" onClick={onClick}>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-prev  visibility-hidden" onClick={onClick}>

    </div>
  );
};

const Projects = () => {
  const sliderRef = useRef(null); 

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2.25,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "-84px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center projects-container">
      <div className="container">
        <h1 className="projects-text">
          Completed <span className="projects-inner-text">Projects</span>
        </h1>
        <p className="projects-description mt-3">
          At Arc Constructions, we take pride in our diverse portfolio of
          successfully completed projects. Each venture showcases our commitment
          to quality, innovation, and client satisfaction. Explore our past
          projects to witness the excellence we bring to every development.
        </p>
      </div>

      <Slider {...settings} ref={sliderRef} className="w-100">
        <div className="slide d-flex flex-column">
          <img src={Projects1} className="projects-img " />
          <div className="d-flex mt-3">
            <p className="projects-des-text ms-2">
              Myntra Warehouse on Soukya Road (2015)
            </p>
            <ul className="projects-des-text2 ms-2">
              <li>Leasable Area: 2 Lac Sq. Ft</li>
            </ul>
          </div>
        </div>
        <div className="slide">
          <img src={Projects2} className="projects-img img-fluid2" />
          <div className="d-flex mt-3">
            <p className="projects-des-text ms-2">
              #6 Primrose, Next to MG Road (2014)
            </p>
            <ul className="projects-des-text2 ms-2">
              <li>Leasable Area: 3,000 Sq. Ft</li>
            </ul>
          </div>
        </div>
        <div className="slide">
          <img src={Projects1} className="projects-img img-fluid2" />
          <div className="d-flex mt-3">
            <p className="projects-des-text ms-2">
              Udaan Warehouse on Soukya Road (2009)
            </p>
            <ul className="projects-des-text2 ms-2">
              <li>Leasable Area: 3,000 Sq. Ft</li>
            </ul>
          </div>
        </div>
      </Slider>

      <div className="d-flex align-items-center w-100 mt-4">
        <div className="container d-flex justify-content-between">
          <div className="w-100 ">
            <button className="projects-button py-3 px-4">
              View All Property&nbsp;&nbsp; &nbsp;&nbsp;
              <span>
                <img src={Vector} className="vector" alt="Know more icon" />
              </span>
            </button>
          </div>
          <div className="w-100 d-flex justify-content-end">
            <button
              className="projects-button2 py-3 px-4"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <span>
                <img src={ProjectsPrev} className="projects-arrow" />
              </span>
            </button>
            <p className="projects-des-text3 mx-2 pt-3 ">1/8</p>
            <button
              className="projects-button2 py-3 px-4"
              onClick={() => sliderRef.current.slickNext()}
            >
              <span>
                <img src={ProjectsNext} className="projects-arrow" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
