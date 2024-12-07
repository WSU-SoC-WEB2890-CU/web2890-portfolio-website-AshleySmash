import "../styles/Home.scss"
import React from "react"

import thingAmajiggersImg from "../assets/WEB2620_ThingAmajiggers_Home.jpeg"
import stylesConfImg from "../assets/WEB1400_StyleConfrence.jpeg"
import rPSImg from "../assets/WEB1430_RPSGame.jpeg"
import tortugaImg from "../assets/WEB2500_Tortuga_Lobby.jpeg"
import culinaryImg from "../assets/WEB3350_CulinaryConnect.jpeg"
import carDealImg from "../assets/WEB2890_CarDeal.jpeg"
import profilePic from "../assets/portflio_pic.jpeg"

import { Carousel } from "react-bootstrap"

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
]

const Home = () => (
  <>
    <div className="hero">
      <div className="overlay d-flex justify-content-center align-items-center">
        <div className="custom-container d-flex align-items-center mx-auto px-2 p-md-0">
          <div className="hero-content mb-1 mx-4 ms-lg-5">
            <h1 className=" mb-3 ">Hello, I’m Ashley Cox</h1>
            <p className="lead">
              I design and develop modern, responsive websites to provide an excellent user experience.
            </p>
          </div>
          <a
            href="/resume-2023.pdf"
            download="Ashley_Cox_Resume.pdf"
            className="btn btn-secondary p-3 py-md-3 py-lg-4 fw-bold"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>

    {/* About Me Section */}
    <section className="about-me-section pt-4 pb-5">
      <div className="container">
        <h2 className="text-center">About Me</h2>
        <div className="row align-items-center mt-4">
          <div className="col-md-6 text-center pb-3">
            <img src={profilePic} alt="Ashley Cox" className="img-fluid mb-3" />
          </div>

          <div className="col-md-6">
            <p>
              Hi, I’m <span>Ashley Cox</span>! I am passionate about designing and developing modern, responsive
              websites that deliver excellent user experiences. My journey into web development started in high school,
              and now I’m pursuing a Bachelor’s degree in Web Development and Design with a Full Stack emphasis at Weber
              State University.
            </p>
            <p>
              With skills in <span>HTML</span>, <span>CSS</span>, <span>React</span>, and
              <span> Ruby on Rails</span>, I bring creativity and precision to every project. Outside of coding, I enjoy{" "}
              <span>coin collecting</span>, <span>rock collecting</span>, and
              <span> sewing</span>—hobbies that inspire my attention to detail and persistence.
            </p>
            <a href="/about" className="btn btn-primary mt-3">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Case Study Section */}
    <section className="case-study-section bg-dark py-5">
      <div className="container">
        <h2 className="text-center">Case Study: Tortuga Lobby</h2>
        <div className="row align-items-center mt-4">
          <div className="col-md-6 order-md-2 text-center pb-4">
            <img src={tortugaImg} alt="Tortuga Lobby Case Study" className="img-fluid rounded" />
          </div>

          <div className="col-md-6 order-md-1">
            <p className="">
              The <span>Tortuga Lobby</span> project reimagines the online experience for <span>TMNT fans</span> by
              centralizing <span>content</span>, <span>merchandise</span>, and <span>community engagement</span>.
              Through detailed research, <span>user interviews</span>, and <span>design iterations</span>, I created a
              hub that delivers value to fans while showcasing my skills in <span>front-end development</span> and{" "}
              <span>user-centered design</span>.
            </p>
            <a href="/case-study/tortuga-lobby" className="btn btn-secondary mt-3">
              View Case Study
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Project Section */}
    <section className="projects-section pt-4 py-5 mx-auto">
      <div className="container ">
        <h2 className="text-center mb-4">My Projects</h2>
        <Carousel>
          {projects.map((project) => (
            <Carousel.Item key={project.id}>
              <a href={project.link} className="text-decoration-none">
                <img
                  src={project.image}
                  alt={project.title}
                  className="d-block w-100"
                  style={{
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <Carousel.Caption
                  style={{
                    height: "100%",
                    position: "absolute",
                    top: "32%",
                  }}
                >
                  <div className="project-title bg-primary rounded text-center p-3">
                    <h5 className="opacity-100 text-white m-0 fw-bold">{project.title}</h5>
                  </div>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>

    {/* Contact Call-to-Action */}
    <div className="col-12 text-center bg-secondary text-white  py-5">
      <h1>Have a Project in Mind?</h1>
      <p>Let's bring it to life together! Contact me today to discuss your ideas.</p>
      <a href="/contact#form" className="btn btn-primary text-white fs-5 px-5">
        Get in Touch
      </a>
    </div>
  </>
)

export default Home
