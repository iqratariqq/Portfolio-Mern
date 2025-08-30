import React from "react";
import "./Projects.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { GrFormNextLink } from "react-icons/gr";
import { GiMonoWheelRobot } from "react-icons/gi";
import { MdDataExploration } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { Zoom } from "react-awesome-reveal";

const Projects = () => {
  return (
    <>
      <div className="Project-Container" id="projects">
        <Zoom>
          {" "}
          <div className="P-title">
            <h1> Projects</h1>
            <hr />
          </div>
        </Zoom>

        <VerticalTimeline lineColor="rgb(65, 150, 159)">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(27, 28, 28)",
              color: "rgb(147, 150, 152)",
              boxShadow: "0 4px 8px rgba(65, 172, 172, 0.3)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(40, 41, 42" }}
            // date="2011 - present"
            iconStyle={{
              background: "rgb(27, 28, 28)",
              color: "#fff",
              boxShadow: "0 0 0 2px rgb(65, 150, 159)",
            }}
            icon={<HiOutlineHomeModern />}
          >
            <h5 className="vertical-timeline-element-title">
              {" "}
              Hostel Mess Management System
            </h5>
            {/* <h4 className="vertical-timeline-element-subtitle">smester project</h4> */}
            <p>
              A <strong>C# Windows Forms</strong> app for hostel meal and
              billing management with admin login, meal tracking, and reports
              using <strong>OOP</strong>.
            </p>
            <div className="link_github">
              <a
                href="https://github.com/iqratariqq/2ndsem_hostel-mess-management-system"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrFormNextLink className="p_icon" size={24} /> View on GitHub
              </a>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(27, 28, 28)",
              color: "rgb(147, 150, 152)",
              boxShadow: "0 4px 8px rgba(65, 172, 172, 0.3)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(40, 41, 42" }}
            // date="2011 - present"
            iconStyle={{
              background: "rgb(27, 28, 28)",
              color: "#fff",
              boxShadow: "0 0 0 2px rgb(65, 150, 159)",
            }}
            icon={<GiMonoWheelRobot />}
          >
            <h5 className="vertical-timeline-element-title">
              {" "}
              Berzerk RU Game
            </h5>
            {/* <h4 className="vertical-timeline-element-subtitle">smester project</h4> */}
            <p>
              A 2D maze shooter game built in <strong>C# Windows Forms</strong>,
              demonstrating
              <strong>OOP design</strong> with player movement, enemy ,
              shooting, and scoring. Combines game logic and UI for an engaging
              desktop game.
            </p>

            <div className="link_github">
              <a
                href="https://github.com/iqratariqq/2ndsem_BerzerkGame"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrFormNextLink className="p_icon" size={24} /> View on GitHub
              </a>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(27, 28, 28)",
              color: "rgb(147, 150, 152)",
              boxShadow: "0 4px 8px rgba(65, 172, 172, 0.3)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(40, 41, 42" }}
            // date="2011 - present"
            iconStyle={{
              background: "rgb(27, 28, 28)",
              color: "#fff",
              boxShadow: "0 0 0 2px rgb(65, 150, 159)",
            }}
            icon={<MdDataExploration />}
          >
            <h5 className="vertical-timeline-element-title">
              {" "}
              eBay Data Scraper
            </h5>
            {/* <h4 className="vertical-timeline-element-subtitle">smester project</h4> */}
            <p>
              A <strong>Python web scraper</strong> using <code>requests</code>{" "}
              and <code>BeautifulSoup</code> to extract product data from eBay.
              Supports multiple URLs, automatic page navigation, and saves
              results to a CSV file. Demonstrates practical data extraction and
              automation skills.
            </p>
            <div className="link_github">
              <a
                href="https://github.com/iqratariqq/3rdSem_Scrapping-eBayData"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrFormNextLink className="p_icon" size={24} /> View on GitHub
              </a>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(27, 28, 28)",
              color: "rgb(147, 150, 152)",
              boxShadow: "0 4px 8px rgba(65, 172, 172, 0.3)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(40, 41, 42" }}
            // date="2011 - present"
            iconStyle={{
              background: "rgb(27, 28, 28)",
              color: "#fff",
              boxShadow: "0 0 0 2px rgb(65, 150, 159)",
            }}
            icon={<GiArtificialIntelligence />}
          >
            <h5 className="vertical-timeline-element-title">
              {" "}
              AI-Based News Summarization App
            </h5>
            {/* <h4 className="vertical-timeline-element-subtitle">smester project</h4> */}
            <p>
              A <strong>Flask web app</strong> that summarizes news articles
              using the <strong>BART transformer</strong>. Includes user login,
              secure session handling, and local NLP processing for quick,
              reliable summaries.
            </p>
            <div className="link_github">
              <a
                href="https://github.com/iqratariqq/AI-Based-News-Summarization-using-Bart-with-Zero-Trust-Security-Measures"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrFormNextLink className="p_icon" size={24} /> View on GitHub
              </a>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Projects;
