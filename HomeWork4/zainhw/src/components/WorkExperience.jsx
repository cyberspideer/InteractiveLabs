import React from "react";

function WorkExperience({ workExperience }) {
    if (!workExperience) return <p>No work experience data available.</p>; // Handle missing data safely
  
    return (
      <section className="work-experience">
        <h2>Work Experience</h2>
        <h3>{workExperience.position}</h3>
        <p>
          <strong>Company:</strong> {workExperience.company} |{" "}
          <strong>Duration:</strong> {workExperience.duration}
        </p>
        <ul>
          {workExperience.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
        <p>
          <strong>Business or Sector:</strong> {workExperience.sector}
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href={workExperience.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {workExperience.website}
          </a>
        </p>
      </section>
    );
  }
  
  export default WorkExperience;
  