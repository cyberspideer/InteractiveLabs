import React from "react";


function About({ about }) {
  return (
    <section className="about">
      <h2>About Myself</h2>
      <p>{about}</p>
    </section>
  );
}


export default About;