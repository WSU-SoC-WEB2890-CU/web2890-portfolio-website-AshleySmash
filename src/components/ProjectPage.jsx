import React from "react"
import { useParams } from "react-router-dom"
import projectsData from "./projectsData"
import "../styles/Projects.scss"

const ProjectPage = () => {
  const { id } = useParams()
  const project = projectsData[id]

  if (!project) {
    return (
      <div className="container py-5 text-center">
        <h1>Project Not Found</h1>
        <p>The project you're looking for does not exist.</p>
        <a href="/projects" className="btn btn-primary mt-4">
          Back to Projects
        </a>
      </div>
    )
  }

  const projectIds = Object.keys(projectsData)
  const currentIndex = projectIds.indexOf(id)
  const prevProject = projectsData[projectIds[currentIndex - 1]]
  const nextProject = projectsData[projectIds[currentIndex + 1]]

  return (
    <>
      <div className="d-flex justify-content-between align-items-center ms-5 ps-5 container">
        <h1 className="p-4 text-start mb-0">My Projects:</h1>

        <div>
          {prevProject && (
            <a href={`/projects/${projectIds[currentIndex - 1]}`} className="btn btn-secondary">
              ← {prevProject.title}
            </a>
          )}
          {nextProject && (
            <a href={`/projects/${projectIds[currentIndex + 1]}`} className="btn btn-secondary ms-4">
              {nextProject.title} →
            </a>
          )}
        </div>
      </div>

      <div className="project-page mx-auto mb-5 rounded">
        <div className="container roundedp-5 px-5 pb-5 pt-3 bg-info rounded">
          <h2 className="text-center pb-3">{project.title}</h2>

          <div className="row mb-1 mb-lg-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="card text-center">
                <div className="card-header bg-primary text-light">
                  <h2 className="mb-0">{project.class}</h2>
                </div>
                <div className="card-body bg-secondary">
                  <img src={project.image} alt={project.title} className="img-fluid rounded" />
                </div>
                <div className="card-footer bg-primary text-light">
                  <h2 className="mb-0">{project.title}</h2>
                </div>
              </div>
            </div>

            <div className="col-lg-6 ">
              <section className="mb-4">
                <h2 className="section-title">Overview</h2>
                <p>{project.overview}</p>
              </section>
              <section className="mb-4 ms-md-5">
                <h3 className="section-title">Role</h3>
                <p>{project.role}</p>
              </section>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 mb-4 d-flex justify-content-center mx-auto">
              <section className="tech p-3 rounded-4">
                <h4 className="section-title text-center">Technologies Used</h4>
                <ul className="list-unstyled">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="tech-item py-2 border-bottom">
                      <span className="badge bg-dark text-black me-2">{index + 1}</span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="col-lg-8">
              <section className="bg-secondary text-white px-5 py-4 rounded-4">
                <h2 className="section-title">Key Features</h2>
                <ul className="list-unstyled">
                  {project.features.map((feature, index) => {
                    const [title, description] = feature.split(":") // Split the feature
                    return (
                      <li key={index} className="feature-item p-2 rounded mb-3">
                        <strong className="d-block ">{title.trim()}</strong>
                        <div className="feature-box rounded">{description.trim()}</div>
                      </li>
                    )
                  })}
                </ul>
              </section>
            </div>
          </div>

          <div className="d-flex justify-content-between mt-5">
            {prevProject && (
              <a href={`/projects/${projectIds[currentIndex - 1]}`} className="btn btn-primary text-white">
                ← {prevProject.title}
              </a>
            )}
            {nextProject && (
              <a href={`/projects/${projectIds[currentIndex + 1]}`} className="btn btn-primary text-white">
                {nextProject.title} →
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectPage
