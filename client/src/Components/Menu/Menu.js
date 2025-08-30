import React, { useState } from "react";
import "./Menu.css";
import { RiHome5Line } from "react-icons/ri";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { GiUnstableProjectile } from "react-icons/gi";
import { GiSkills } from "react-icons/gi";
import { MdOutlineContactPhone } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const Menu = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <div className="nav-items">
      <div className="nav-item">
        <div className="nav-link"></div>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onSetActive={handleSetActive}
          className={`nav-link ${activeLink === "home" ? "active-anim" : ""}`}
        >
          <RiHome5Line /> Home
        </Link>

        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onSetActive={handleSetActive}
          className={`nav-link ${activeLink === "about" ? "active-anim" : ""}`}
        >
          <MdOutlineRoundaboutRight /> About
        </Link>
        <Link
          to="skill"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onSetActive={handleSetActive}
          className={`nav-link ${activeLink === "skill" ? "active-anim" : ""}`}
        >
          <GiSkills /> Skill
        </Link>

        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onSetActive={handleSetActive}
          className={`nav-link ${
            activeLink === "projects" ? "active-anim" : ""
          }`}
        >
          <GiUnstableProjectile /> Projects
        </Link>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onSetActive={handleSetActive}
          className={`nav-link ${
            activeLink === "contact" ? "active-anim" : ""
          }`}
        >
          <MdOutlineContactPhone /> Contact
        </Link>

        <div className="nav-link social-link">
          <a
            href="https://www.linkedin.com/in/iqra-tariq-b1924a2b1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin />
          </a>
          <a
            href="https://github.com/iqratariqq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
