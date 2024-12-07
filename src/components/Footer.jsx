import React from "react"

const Footer = () => (
  <footer className="footer py-4 mt-0 bg-dark">
    <div className="container">
      {/* Contact Information */}
      <div className="row justify-content-md-center text-start text-md-center pt-1">
        <div className="col-md-4 mb-3">
          <i className="bi bi-envelope-fill me-2 me-lg-3 fs-3"></i>
          <p className="d-inline">ashleycox1@mail.weber.edu</p>
        </div>
        <div className="col-md-4 mb-3">
          <i className="bi bi-github me-2 me-lg-3 fs-3"></i>
          <a
            href="https://github.com/AshleySmash"
            className="text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            AshleySmash
          </a>
        </div>
        <div className="col-md-4">
          <i className="bi bi-linkedin me-2 me-lg-3 fs-3"></i>
          <a
            href="https://www.linkedin.com/in/ashley-cox-228a63261/"
            className="text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Page
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-3 text-center">
        <p className="mb-0">© 2024 Ashley Cox. All Rights Reserved</p>
      </div>
    </div>
  </footer>
)

export default Footer
