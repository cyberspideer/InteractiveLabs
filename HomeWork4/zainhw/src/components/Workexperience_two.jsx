import React from "react";


function Workexperience_two({ Workexperience_two }) {
  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      <h3>{Workexperience_two.position}</h3>
      <p>
        <strong>Company:</strong> {Workexperience_two.company} |{" "}
        <strong>Duration:</strong> {Workexperience_two.duration}
      </p>
      <ul>
        {Workexperience_two.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
      <p>
        <strong>Business or Sector:</strong> {Workexperience_two.sector}
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a
          href={Workexperience_two.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          {Workexperience_two.website}
        </a>
      </p>
    </section>
  );
}

export default Workexperience_two;