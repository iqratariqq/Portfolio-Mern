import "./Skill.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Progressbar from "../../Components/Progress-Bar/Progressbar";
import { Zoom } from 'react-awesome-reveal';

const Skill = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="skill-section" id="skill">
        <Zoom><div className="title"><h1>Skills</h1></div></Zoom>
        
        
        <div className="card skill-container">
          
          <div className="skill-slider">

            <Slider {...settings}>
              {skillsData.map((skill) => (
                <div className="skills">
                  <h3>{skill.Name}</h3>
                  <div className="skill-list">
                    <div className="skill-item">
                      {skill.skills.map((item) => {
                        return (
                          <div className="skill-item-container">
                            <div className="skill-progress">
                            <Progressbar width={item.width} />
                            </div>
                            <div className="skill-name">
                              <h5>{item.name}</h5>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

const skillsData = [
  {
    Name: "Web Development",
    skills: [
      {
        name: "  HTML",
        width: "80",
      },
      {
        name: "  CSS  ",
        width: "80",
      },
            {
        name: "  Bootstrap  ",
        width: "70",
      }, 
      {
        name: "  MERN Stack  ",
        width: "70",
      },
    ],
  },
  {
    Name: " Programming Languages ",
    skills: [
      {
        name: " JavaScript ",
        width: "60",
      },
      {
        name: " Python ",
        width: "70",
      },
      {
        name: " C++ ",
        width: "75",
      },
      {
        name: " C# ",
        width: "60",
      },
      // {name:" Data Structure & Algorithms ", width: "65"},
      // {name:" OOP ",width:"80"}
    ],
  },
  {
    Name: "Gen AI",
    skills: [
      { name: "Prompt Engineering", width: "80" },
      { name: "Text & Image Generation", width: "75" },
      { name: "Chatbot Development", width: "70" },
      { name: "NLP & Model Fine-tuning", width: "65" },
    ],
  },
  {
    Name: "Data Science",
    skills: [
      { name: "Python", width: "70" },
      { name: "Pandas", width: "50" },
      { name: "Matplotlib", width: "60" },
      { name: "Scikit-learn", width: "50" },
      { name: "SQL", width: "65" },
    ],
  },
  {
    Name: "Other Skills",
    skills: [
      // { name: "Video Editing", width: "70" },
      { name: "Technical Documentation", width: "60" },
      { name: "Git & GitHub", width: "75" },
      { name: "Jupyter Notebook", width: "80" },
      { name: "Google Colab", width: "75" },
    ],
  },
];

export default Skill;
