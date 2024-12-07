import React from "react"
import EducationGoals from "../components/EducationGoals"
import "../styles/About.scss"

import profilePic from "../assets/portflio_pic.jpeg"

const About = () => (
  <div className="about">
    <div className="d-lg-flex">
      <div className="hero-intro bg-info py-5 row align-items-center justify-content-center mx-0 w-100 w-lg-50 ps-lg-0 mx-lg-auto">
        <div className="col-5 col-md-3 text-center mb-3 mb-md-0 mx-lg-auto">
          <img
            src={profilePic}
            alt="Ashley Cox"
            className="rounded-circle img-fluid mx-lg-auto "
            style={{ maxWidth: "200px" }}
          />
        </div>

        <div className="col-7 d-flex flex-column justify-content-center ps-md-5 ms-md-5 ms-lg-4">
          <h1 className=" text-center text-md-start mb-2">About Me</h1>
          <p className="fst-italic text-md-start text-center">My Journey into Web Development</p>
        </div>
      </div>

      <div className="bg-secondary text-light p-5 d-flex flex-column justify-content-center w-100 w-lg-50">
        <div>
          <h2 className="fw-bold">Hi, I'm Ashley Cox!</h2>
          <p>
            I am passionate about designing and developing modern, responsive websites that deliver excellent user
            experiences. My journey into web development started in high school, and now I’m pursuing a Bachelor’s in
            Web Development and Design with a Full Stack emphasis at Weber State University.
          </p>
          <p>
            I specialize in both front-end and back-end development, with skills in HTML5, CSS3, JavaScript, React, Ruby
            on Rails, and more. My hobbies, like coin collecting and rock collecting, have taught me attention to detail
            and persistence—qualities I bring to every project.
          </p>
        </div>
      </div>
    </div>

    <div className="hobbies container py-4">
      <hr />
      {/* Hobbies Section */}
      <h2 className="text-center mb-4">Hobbies</h2>
      <div className="row">
        <div className="col-md-4 mb-3 d-flex align-items-stretch">
          <div className="card text-center w-100">
            <div className="card-body d-flex flex-column">
              <i className="bi bi-coin mb-3"></i>
              <h5 className="card-title">Coin Collecting</h5>
              <p className="card-text flex-grow-1">
                I enjoy collecting rare and historical coins, which has taught me patience and a keen eye for detail.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3 d-flex align-items-stretch">
          <div className="card text-center w-100">
            <div className="card-body d-flex flex-column">
              <i className="bi bi-cloud-fill mb-3"></i>
              <h5 className="card-title">Rock Collecting</h5>
              <p className="card-text flex-grow-1">
                Exploring nature and finding unique rocks fuels my curiosity and love for geology.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3 d-flex align-items-stretch">
          <div className="card text-center w-100">
            <div className="card-body d-flex flex-column">
              <i className="bi bi-scissors mb-3"></i>
              <h5 className="card-title">Sewing</h5>
              <p className="card-text flex-grow-1">
                Sewing allows me to combine creativity and precision, crafting unique projects with care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center bg-dark p-5 ">
      <div className="row">
        <h2 className="text-center mb-4">Skills & Technologies</h2>

        <div className="col-md-3 mb-3">
          <div className="card bg-primary text-black">
            <div className="card-body">
              <i className="bi bi-code-slash fs-1 mb-3"></i>
              <h5 className="card-title">HTML & CSS</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card bg-primary text-black">
            <div className="card-body">
              <i className="bi bi-bootstrap fs-1 mb-3"></i>
              <h5 className="card-title">Bootstrap & SCSS</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card bg-primary text-black">
            <div className="card-body">
              <i className="bi bi-laptop fs-1 mb-3"></i>
              <h5 className="card-title">JavaScript & React</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card bg-primary text-black">
            <div className="card-body">
              <i className="bi bi-gem fs-1 mb-3"></i>
              <h5 className="card-title">Ruby on Rails</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <EducationGoals />
  </div>
)

export default About
