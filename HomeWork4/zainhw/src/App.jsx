import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Workexperience_two from "./components/Workexperience_two";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Achievement from "./components/Achievement";
import Tools from "./components/Tools";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  const [showProjects, setShowProjects] = useState(false);


  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };
  const cvData = {
    name: "Zain Ul Abideen",
    dob: "30.05.1993",
    nationality: "Pakistani",
    sex: "Male",
    phone: "(+372) 55611644",
    email: "Studio.zeed@gmail.com",
    address: "Karu 17,44A3, 10120, Tallinn, Estonia",
    about:
      "Creative and driven professional with years of experience in graphic design, social media marketing, and branding. Adept at creating engaging content and implementing marketing campaigns that resonate with target audiences. Currently pursuing an MSc in Human-Computer Interaction at Tallinn University, with a passion for digital marketing, user engagement, and innovative tech driven strategies..",
    workExperience: {
      position: "Production Artist",
      company: "DML",
      duration: "05/01/2020 – 01/01/2023 ",
      responsibilities: [
        "My work as a Production Artist was to have meetings with the clients in order to understand their needs and suggest to them what would be the best way of communication and marketing in order to achieve their goals; which could be increasing sales, boosting their footprint or spreading the word of mouth.",
        "I was leading a team of designers for whom I craft the action plan and guide them throughout the process. I have to act as a designer, and trainer and was responsible for the efficient delivery of the agreed plan.",
        "Created innovative designs for UX/UI projects, print media, and digital platforms.",
      ],
      sector: "Marketing",
      website: "Dml.com",
    },
    Workexperience_two: {
      position: "Graphic Designer",
      company: "Axis Communication",
      duration: "03.07.2017 – 10.11.2019",
      responsibilities: [
        "Created innovative designs for UX/UI projects, print media, and digital platforms.",
        "Created visually compelling designs for digital marketing campaigns, brochures, and advertisements to support the company's communication strategies.Maintenance and responsiveness are also my main responsibilities.",
        "Designed engaging graphics, carousels, and promotional assets that aligned with strategic marketing initiatives.",
        "Produced branding assets, including logos, infographics, and promotional content, tailored to meet diverse business needs..",
        "Assisted in the conceptualization and development of creative marketing initiatives, ensuring consistency across all media platforms.",
      ],
      sector: "Design and Marketing",
      website: "Axis Communication",
    },
    Education: {
      degree: "MSc Human Computer Interaction (HCI)",
      university: "Tallinn University",
      duration: "01/09/2024 – CURRENT",
      field: "Design and Engenaring ",
    },
    Skills: [
      "",
      "HTML, Java, CSS",
      "Prototyping",
      "Design Thinking, Design Research",
      "Graphic Design, User interface (UI), Cloud Storage",
    ],
    Achievement: [
      "Won over 80 design competitions, establishing a reputation for creativity and innovation.",
      "Collaborated with a P&G ambassador to create promotional materials for Gillette",
      
    ],
    Tools: [
      "",
      "Photoshop, Miro, DoveTail",
      "Adobe XD",
      "Adobe Illustrator, Cmap Tools",
      "Adobe After Effects,WireFraming, Cloud Storage",
    ],
  };


  return (
    <>
      <div className="App">
        <Header
          name={cvData.name}
          dob={cvData.dob}
          nationality={cvData.nationality}
          sex={cvData.sex}
          phone={cvData.phone}
          email={cvData.email}
          address={cvData.address}
        />
        <About about={cvData.about} />
        <WorkExperience workExperience={cvData.workExperience} />
        <Workexperience_two Workexperience_two={cvData.Workexperience_two} />
        <Education education={cvData.Education} />
        <Skills skills={cvData.Skills} />
        <Achievement projects={cvData.Achievement} />
        <Tools certificates={cvData.Tools} />
        <Footer />
      </div>
    </>
  );
}


export default App;

