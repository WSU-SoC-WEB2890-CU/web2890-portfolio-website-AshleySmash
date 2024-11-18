import React, { useState } from "react";
import "../styles/Contact.scss";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!formData.message.trim()) {
      errors.message = "Message cannot be empty.";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" }); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      console.log("Form Submitted:", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="contact-page">
      <div className="col-12 text-center bg-secondary text-white  py-5 mb-3 ">
        <h1>Have a Project in Mind?</h1>
        <p>
          Let's bring it to life together! Contact me today to discuss your
          ideas.
        </p>
        <a href="#form" className="btn btn-primary text-white fs-5 px-5">
          Get in Touch
        </a>
      </div>
      <div className="col-12 text-center">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion text-start mt-3 mx-auto" id="faqAccordion">
          <div className="accordion-item mx-3">
            <h2 className="accordion-header" id="faqOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is the best way to contact you?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="faqOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can reach me via email or by filling out the contact form on
                this page.
              </div>
            </div>
          </div>
          <div className="accordion-item mx-3">
            <h2 className="accordion-header" id="faqTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How quickly will you respond?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="faqTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                I aim to respond within 24-48 hours.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <div className="contact-box row container rounded bg-info py-5 px-4 my-4 mx-auto align-items-start">
          <div className="col-md-6 mb-4">
            <h2 className="mb-3">Contact Me</h2>
            <p>
              If you would like to know more, or have a question, feel free to
              contact me!
            </p>
            <p>
              You can use this messaging form or email me at{" "}
              <strong>ashleycox1@mail.weber.edu</strong>
            </p>
            <div className="d-flex flex-row gap-3 ">
              <div>
                <i className="bi bi-github fs-4 me-2"></i>
                <a
                  href="https://github.com/AshleySmash"
                  className="text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AshleySmash
                </a>
              </div>
              <div>
                <i className="bi bi-linkedin fs-4 me-2"></i>
                <a
                  href="https://www.linkedin.com/in/ashley-cox-228a63261/"
                  className="text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <form id="form" onSubmit={handleSubmit} className="row g-3">
              <div className="col-12">
                <label htmlFor="name" className="form-label fw-bold">
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    formErrors.name ? "is-invalid" : ""
                  }`}
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {formErrors.name && (
                  <div className="invalid-feedback">{formErrors.name}</div>
                )}
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label fw-bold">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${
                    formErrors.email ? "is-invalid" : ""
                  }`}
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && (
                  <div className="invalid-feedback">{formErrors.email}</div>
                )}
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label fw-bold">
                  Message
                </label>
                <textarea
                  className={`form-control ${
                    formErrors.message ? "is-invalid" : ""
                  }`}
                  id="message"
                  name="message"
                  placeholder="Type your message here"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {formErrors.message && (
                  <div className="invalid-feedback">{formErrors.message}</div>
                )}
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-teal text-white rounded p-2 w-100"
                >
                  Submit
                </button>
              </div>
            </form>
            {isSubmitted && (
              <p className="text-success mt-3">
                Thank you for your message! I'll get back to you soon.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
