import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => (
  <header>
    <nav className="navbar navbar-dark bg-dark">
      <NavLink className="navbar-brand ms-3 p-3 bg-white text-black" to="/">
        A/C
      </NavLink>

      <div className="d-none d-lg-flex ms-auto me-3">
        <ul className="navbar-nav d-flex flex-row align-items-center">
          <li className="nav-item">
            <NavLink className={({ isActive }) => `nav-link fs-5 px-3 me-3 me-md-2 ${isActive ? "active" : ""}`} to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item dropdown position-relative">
            <a
              className="nav-link dropdown-toggle fs-5 px-3 ms-3 ms-md-2"
              href="#"
              id="projectsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Projects
            </a>
            <ul
              className="dropdown-menu position-absolute"
              aria-labelledby="projectsDropdown"
              style={{ top: "100%", left: "0", zIndex: 1000 }}
            >
              <li>
                <NavLink
                  className={({ isActive }) => `dropdown-item fs-5 ${isActive ? "active" : ""}`}
                  to="/projects/thingamajiggers"
                >
                  ThingAmajiggers
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => `dropdown-item fs-5 ${isActive ? "active" : ""}`}
                  to="/projects/stylesconference"
                >
                  Styles Conference
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => `dropdown-item fs-5 ${isActive ? "active" : ""}`}
                  to="/projects/rockpaperscissors"
                >
                  Rock Paper Scissors
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => `dropdown-item fs-5 ${isActive ? "active" : ""}`}
                  to="/projects/tortugalobby"
                >
                  Tortuga Lobby
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => `dropdown-item fs-5 ${isActive ? "active" : ""}`}
                  to="/projects/culinaryconnect"
                >
                  CulinaryConnect
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => `dropdown-item fs-5 ${isActive ? "active" : ""}`}
                  to="/projects/cardeal"
                >
                  CarDeal
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => `nav-link fs-5 px-3 mx-3 mx-md-1 ${isActive ? "active" : ""}`}
              to="/case-study"
            >
              Case Study
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => `nav-link fs-5 px-3 mx-3 mx-md-1 ${isActive ? "active" : ""}`}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => `nav-link fs-5 px-3 me-3 me-md-1 ${isActive ? "active" : ""}`}
              to="/contact"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      <button
        className="navbar-toggler bg-primary me-3 d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="offcanvas offcanvas-end bg-dark" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header mb-0 pb-0">
          <h5 className="offcanvas-title text-decoration-underline text-black fs-2" id="offcanvasNavbarLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close btn-close-black"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link fs-5 ${isActive ? "active" : ""}`} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fs-5"
                href="#"
                id="offcanvasProjectsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </a>
              <ul className="dropdown-menu" aria-labelledby="offcanvasProjectsDropdown">
                <li>
                  <NavLink
                    className={({ isActive }) => `dropdown-item fs-5 ${isActive ? "active" : ""}`}
                    to="/projects/thingamajiggers"
                  >
                    ThingAmajiggers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => `dropdown-item fs-5 ${isActive ? "active" : ""}`}
                    to="/projects/stylesconference"
                  >
                    Styles Conference
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => `dropdown-item fs-5 ${isActive ? "active" : ""}`}
                    to="/projects/rockpaperscissors"
                  >
                    Rock Paper Scissors
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => `dropdown-item fs-5 ${isActive ? "active" : ""}`}
                    to="/projects/tortugalobby"
                  >
                    Tortuga Lobby
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => `dropdown-item fs-5 ${isActive ? "active" : ""}`}
                    to="/projects/culinaryconnect"
                  >
                    CulinaryConnect
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => `dropdown-item fs-5 ${isActive ? "active" : ""}`}
                    to="/projects/cardeal"
                  >
                    CarDeal
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link fs-5 ${isActive ? "active" : ""}`} to="/case-study">
                Case Study
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link fs-5 ${isActive ? "active" : ""}`} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link fs-5 ${isActive ? "active" : ""}`} to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
