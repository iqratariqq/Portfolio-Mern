import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import ContactImg from "../../assests/images/Contact.png"; // Adjust the path as necessary
import { FaGithub } from "react-icons/fa";
import { Zoom } from "react-awesome-reveal";
import { toast } from "react-toastify";
import { CiLinkedin } from "react-icons/ci";


const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const handlesubmision = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !message)
        toast.error("Provide all fields", {
          className: "my-toast",
        });
      const res = await axios.post(
        `https://backend-mern-beta.vercel.app//api/v1/portfolio/sendEmail`,
        { name, email, message }
      );

      //validation
      if (res.data.success) {
        toast.success(res.data.message);
        setname("");
        setemail("");
        setmessage("");
      } else {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="Contact-section" id="contact">
        <Zoom>
          <div className="title">
            <h1> Get In Touch</h1>
          </div>
        </Zoom>

        <div className="contact container">
          <div className="card card0 border-0 bg-black">
            <div className="row ">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xl-6">
                <div className="card1">
                  <div className="row border-line">
                    <img
                      src={ContactImg}
                      alt="contact"
                      className="contact-img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xl-6 ">
                <div className="card2 d-flex card border-0 px-0 mr-3 ml-0">
                  <div className="row  justify-content-center align-items-center text-center pt-2 heading">
                    <h6>Contact with</h6>
                    <div className="contact-link">
                      <div className="contact-social-link">
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

                  <div className="row px-3 mb-4 justify-content-center align-items-center or-section">
                    <div className="d-flex align-items-center or-divider w-100">
                      <div className="line"></div>
                      <span className="or-text px-2">OR</span>
                      <div className="line"></div>
                    </div>
                  </div>

                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="mb-3"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write your message"
                      className="mb-3"
                      value={message}
                      onChange={(e) => setmessage(e.target.value)}
                    />
                  </div>
                  <div className="row d-flex justify-content-center align-items-center">
                    <button className="btn button" onClick={handlesubmision}>
                      Send message
                    </button>
                  </div>
                  {/* <div /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
