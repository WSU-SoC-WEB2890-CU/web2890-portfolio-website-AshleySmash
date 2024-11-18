import React from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.scss";
import projectsData from "../components/projectsData";

const Projects = () => (
  <div className="projects container py-5">
    <h1 className="mb-4 text-center">My Projects</h1>
    <div className="row g-4">
      {projectsData.map((project) => (
        <div className="col-md-4" key={project.id}>
          <Link
            to={`/projects/${project.id}`}
            className="card text-decoration-none h-100"
          >
            <img
              src={project.image}
              alt={project.title}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
