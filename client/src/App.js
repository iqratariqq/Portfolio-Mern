
import Footer from "./Components/Footer/Footer.js";
import Layout from "./Components/Layout/Layout.js";
import About from "./Pages/about/About.js";
import Contact from "./Pages/Contact/Contact.js";
import Skill from "./Pages/Skill/Skill.js";
import ScrollToTop from "react-scroll-to-top";
import ScrollToBottom from "./Components/ScrollToBottom/ScrollToBottom.js"; // new button
import Projects from "./Pages/Projects/Projects.js";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="text-success">
      <ToastContainer />
      <Layout />
      <About />
      <Skill />
      <Projects/>
      <Contact />
      <Footer />

      {/* Scroll to Top */}
      <ScrollToTop
  smooth
  style={{
    backgroundColor: "transparent",
    color: "#5a6571",
    boxShadow: "none",
    borderRadius: "5vh",
    width: "5vh",
    height: "5vh",
    border: "0.3vh solid #5a6571",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
  }}
  component={<span>↑</span>}
/>

      <ScrollToBottom />
    </div>
  );
}

export default App;
