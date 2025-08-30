import React from "react";
import "./About.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineCastForEducation } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { Zoom } from 'react-awesome-reveal';

const About = () => {
  return (
    <div className="about-container" id="about">
      <Zoom><div className="P-title"> <h1>About me</h1></div></Zoom>
      
      <VerticalTimeline lineColor="rgb(65, 150, 159)">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(27, 28, 28)",
            color: "rgb(147, 150, 152)",
            boxShadow: "0 4px 8px rgba(65, 172, 172, 0.3)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(40, 41, 42" }}
          date="2022 - 2026"
          iconStyle={{
            background: "rgb(27, 28, 28)",
            color: "#fff",
            boxShadow: "0 0 0 2px rgb(65, 150, 159)",
          }}
          icon={<MdOutlineCastForEducation />}
        >
          <h5 className="vertical-timeline-element-title">
            {" "}
           Bachelor of Science in Computer Science (BSCS)
          </h5>
          <h7 className="vertical-timeline-element-subtitle">Universty of Engineering and Technology,Lahore</h7>
  <p>
    I am currently pursuing my BSCS degree, focusing on building strong foundations in programming,
    software development, and emerging technologies. My coursework and projects help me develop
    practical problem-solving and technical skills for real-world applications.
  </p>
          <div className="link_github">
          <a
            href="https://www.linkedin.com/in/iqra-tariq-b1924a2b1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin  size={34}/>
          </a>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>

      {/* Objective Section */}
      <div className="about-section">
        <div className="about-content objective">
          <div className="about-title">
            <h3>Objective</h3>
          </div>
          <p>
            I aspire to be a creative tech innovator who solves meaningful
            problems through code. With a focus on AI, web, and human-centered
            design, I aim to craft digital experiences that leave a real impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
