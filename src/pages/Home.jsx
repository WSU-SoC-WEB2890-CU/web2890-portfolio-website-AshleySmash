import "../styles/Home.scss";
import React from "react";

import thingAmajiggersImg from "../assets/WEB2620_ThingAmajiggers_Home.jpeg";
import stylesConfImg from "../assets/WEB1400_StyleConfrence.jpeg";
import rPSImg from "../assets/WEB1430_RPSGame.jpeg";
import tortugaImg from "../assets/WEB2500_Tortuga_Lobby.jpeg";
import culinaryImg from "../assets/WEB3350_CulinaryConnect.jpeg";
import carDealImg from "../assets/WEB2890_CarDeal.jpeg";

const projects = [
  {
    id: 1,
    title: "ThingAmajiggers",
    image: thingAmajiggersImg,
    link: "/projects/thingamajiggers",
  },
  {
    id: 2,
    title: "Styles Conference",
    image: stylesConfImg,
    link: "/projects/stylesconference",
  },
  {
    id: 3,
    title: "Rock Paper Scissors",
    image: rPSImg,
    link: "/projects/rockpaperscissors",
  },
  {
    id: 4,
    title: "Tortuga Lobby",
    image: tortugaImg,
    link: "/projects/tortugalobby",
  },
  {
    id: 5,
    title: "Culinary Connect",
    image: culinaryImg,
    link: "/projects/culinaryconnect",
  },
  {
    id: 6,
    title: "CarDeal",
    image: carDealImg,
    link: "/projects/cardeal",
  },
];

const Home = () => (
  <>
    <div className="hero">
      <div className="overlay d-flex justify-content-center align-items-center">
        <div className="custom-container d-flex align-items-center mx-auto px-4 p-md-0">
          <div className="hero-content mb-4 mx-4 ms-lg-5">
            <h1 className="display-4 mb-3 ">Hello, I’m Ashley Cox</h1>
            <p className="lead">
              I design and develop modern, responsive websites to provide an
              excellent user experience.
            </p>
          </div>
          <a
            href="/resume.pdf"
            className="btn btn-secondary p-3 py-md-3 py-lg-5 fw-bold"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>

    {/* Project Cards Section */}
    <section className="projects-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-4" key={project.id}>
              <a
                href={project.link}
                className="card text-decoration-none h-100"
              >
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body text-center bg-primary rounded-bottom">
                  <h5 className="card-title text-white">{project.title}</h5>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Home;
