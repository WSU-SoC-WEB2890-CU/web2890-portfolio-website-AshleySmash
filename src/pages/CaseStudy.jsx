import React from "react";
import "../styles/CaseStudy.scss";

import personaImg from "../assets/persona_img.png";
import mockupImg from "../assets/mockup.png";
import sitemapImg from "../assets/sitemap.png";
import tortugaWebImg from "../assets/WEB2500_Tortuga_Lobby.jpeg";
const CaseStudy = () => (
  <div className="case-study">
    <header className="text-center bg-info p-4 p-md-5 mb-md-3 ">
      <h1>Tortuga Lobby: Redesigning the TMNT Fan Experience</h1>
    </header>

    <section className="problem-statement bg-secondary text-white p-4 m-md-4 mx-lg-auto">
      <h2 className=" text-white fw-bold text-center text-md-start fs-2">
        Problem Statement
      </h2>
      <p className="fs-5">
        The current TMNT online experience is marred by duplicate products,
        prolonged search efforts, and a sketchy aesthetic across multiple
        websites. The lack of a centralized hub compounds user frustration.
        Tortuga Lobby was designed to create an immersive and cohesive
        experience for TMNT fans, solving these issues by centralizing content
        and merchandise in a user-friendly way.
      </p>
    </section>

    <section className="bg-dark">
      <div className="fan-frustrations pt-3 m-0 p-3 mx-lg-auto">
        <div className="row">
          <h2 className="text-center mb-3">
            Understanding Fan Frustrations Through User Interviews
          </h2>
          <div className="col-12 col-lg-8">
            <img
              src={personaImg}
              alt="User Interview 1"
              className="img-fluid mb-3"
            />
          </div>
          <div className="col-12 col-lg-4 fs-5 text-md-center my-lg-auto">
            <p>
              Through our interviews, users highlighted the frustration of
              having to search multiple sites for authentic merchandise and
              updated TMNT content. They wanted a more immersive, centralized
              fan portal.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="sitemaps d-flex flex-column align-items-center mx-lg-auto">
      <h2 className="text-center pt-3">
        Designing for Fans: Wireframes, Taxonomy, and Sitemaps
      </h2>
      <div className="p-4 pt-2 text-center">
        <img
          src={sitemapImg}
          alt="Wireframes"
          className="img-fluid mb-3 border rounded "
        />
        <p className="fs-5">
          The sitemap ensured a seamless user journey through different sections
          of the site, while wireframes helped us visualize content placement
          and structure.
        </p>
      </div>
    </section>

    <section className="bg-info">
      <div className="prototype mx-lg-auto">
        <h2 className="text-center pt-3">From Sketches to Final Prototypes</h2>
        <div className="row px-4 pb-2 pt-3">
          <div className="col-12 col-lg-8 order-lg-2">
            <img src={mockupImg} alt="Sketches" className="img-fluid mb-3" />
          </div>
          <div className="col-12 col-lg-4 fs-5 text-md-center my-lg-auto order-lg-1">
            <p>
              We opted for a bold, vibrant green theme to stay true to TMNT's
              brand identity, while using soft, readable fonts for a
              user-friendly interface.
            </p>
          </div>
        </div>
      </div>
    </section>

    <h2 className="text-center mt-4 d-none d-md-block">
      Overcoming Development Obstacles
    </h2>

    <section className="obstacles p-4 mb-md-4 text-center">
      <h2 className="mt-2 d-md-none">Overcoming Development Obstacles</h2>
      <p className="fs-5">
        One of the main challenges was developing the dynamic search
        functionality and ensuring that users could easily navigate the growing
        database of merchandise and news. We used JavaScript for real-time
        search filters and SCSS for styling flexibility.
      </p>
    </section>

    <h2 className="text-center mt-4 d-none d-md-block">
      Refining the Design: Before and After
    </h2>

    <section className="refining p-4 text-center bg-info">
      <h2 className="mt-2 d-md-none">Refining the Design: Before and After</h2>

      <p className="fs-5">
        Through user feedback, we improved the navigation menu to be more
        intuitive and redesigned the merchandise showcase for better engagement.
      </p>
    </section>

    <section className="conclusion p-4 bg-light m-md-5">
      <div className="row align-items-center">
        <h2 className="mb-3 d-md-none text-center d-block">Conclusion</h2>

        <div className="col-12 col-lg-6 text-center mb-3 mb-lg-0">
          <img
            src={tortugaWebImg}
            alt="Tortuga Website"
            className="img-fluid border rounded"
          />
        </div>

        <div className="col-12 col-lg-6 text-lg-start text-center">
          <h2 className="mb-3 d-none d-md-block">Conclusion</h2>
          <p className="fs-5">
            Tortuga Lobby not only provided a cohesive solution to TMNT fans but
            also allowed me to fully explore my capabilities in front-end
            development and user-centered design. By utilizing SCSS and
            JavaScript, I was able to create an engaging, interactive platform
            that truly caters to the needs of the fan community.
          </p>
        </div>
      </div>
    </section>

    <section className="text-center bg-secondary text-white my-0 py-5">
      <p className="lead fs-3 px-4">
        Interested in seeing more? Check out the full project on{" "}
        <a
          href="https://github.com/AshleySmash/TempletWebsite"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </section>
  </div>
);

export default CaseStudy;
