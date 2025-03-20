import React from "react";


function Achievement({ projects }) {
  return (
    <section className="Testimonial">
      <h2>Testimonials</h2>
      {projects.map((Testimonial, index) => (
        <div key={index}>
          <h3>{projects.title}</h3>
          <p>{projects.description}</p>
          <p>
            <strong>Link:</strong>{" https://99designs.com/profiles/1051696/about "}
            <a
              href={projects.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {projects.link}
            </a>
          </p>
        </div>
      ))}
    </section>
  );
}


export default Achievement;