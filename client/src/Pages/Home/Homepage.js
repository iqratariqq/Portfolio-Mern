import  { useState } from "react";
import "../../Components/Layout/Layout.css";
import "./HomePage.css";
import { PiReadCvLogoBold } from "react-icons/pi";
import Resume from "../../assests/Docs/sofware.pdf";
import Typewriter from 'typewriter-effect';
import { Link } from "react-scroll";

const Homepage = () => {
    const [activeLink, setActiveLink] = useState("");
  
    const handleSetActive = (to) => {
      setActiveLink(to);
    };
  return (
    <>
      <div className="content-section" id="home">
        <div className="content">
          <h2>Hey!</h2>
          <h1>
            I'm <span className="highlight-name">Iqra Tariq</span> ,

      
          </h1>
          <p>
            {" "}
            <span className="highlight-skill">
              <Typewriter
                options={{
                  strings: ["Web Developer | APP Developer | AI enthusiast"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            {" "}
            </span>
            — solving problems that matter.
          </p>
        </div>
        <div className="Home_button">

<Link
  to="contact"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
  onSetActive={handleSetActive}
  className={`btn btn-contact  ${activeLink === "contact" ? "active-anim" : ""}`}
>
  Contact Me!
</Link>

          <a className="btn btn-Resume" href={Resume} download="Iqra Tariq.pdf">
            <PiReadCvLogoBold title="Resume" size="3vh" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Homepage;
