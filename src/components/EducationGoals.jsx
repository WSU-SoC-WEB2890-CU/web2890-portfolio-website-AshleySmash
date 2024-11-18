import React from "react";

const EducationGoals = () => {
  const goals = [
    {
      percentage: "98%",
      title: "Computer Science Minor",
      description:
        "I have almost completed my minor in Computer Science. I only need to take one more class, CS 2420.",
      icon: "bi bi-graph-up-arrow",
      label: "Minor",
    },
    {
      percentage: "93%",
      title: "Associates of Applied Science",
      description:
        "I have almost completed my Associates in Applied Science. If I pass my Web 2890 class that I am taking this semester, I only need to take one more class, WEB 2630.",
      icon: "bi bi-book",
      label: "Associates",
    },
    {
      percentage: "81%",
      title:
        "Bachelor of Applied Science with Web Development and Design Major",
      description:
        "I am currently pursuing my Bachelor's degree in Web Design and Development with a Full Stack emphasis at Weber State University. I plan to graduate in Spring 2026.",
      icon: "bi bi-mortarboard",
      label: "Bachelor / Major",
    },
    {
      icon: "bi bi-trophy",
      percentage: "",
      label: "Goals",
      title: "Future Plans and Goals",
      description:
        "I have been applying for internships to gain real-world experience in the field. My goal is to work on projects that challenge me to grow as both a front-end and full-stack developer.",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Education & Future Goals</h2>
        <div className="row gy-4">
          {goals.map((goal, index) => (
            <div key={index} className="col-lg-6 d-flex">
              <div className="card shadow-md w-100 d-flex flex-column">
                <div className="card-body d-flex align-items-center flex-grow-1">
                  <div className="text-center me-3">
                    <i className={`${goal.icon} text-primary display-4`}></i>

                    {goal.percentage && (
                      <div className="display-5 text-black fw-bold">
                        {goal.percentage}
                      </div>
                    )}
                    <p className="mt-2 fs-2">{goal.label}</p>
                  </div>
                  <div className="border-start border-black ps-3">
                    <h5 className="fw-bold fs-3">{goal.title}</h5>
                    <p className="mb-0 text-muted fs-5">{goal.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationGoals;
