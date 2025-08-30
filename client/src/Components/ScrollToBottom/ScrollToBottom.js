import React, { useEffect, useState } from "react";

const ScrollToBottom = () => {
  const [visible, setVisible] = useState(true);

  const checkIfBottom = () => {
    const scrollY = window.scrollY;
    const visibleHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    // If within 100px of the bottom, hide the button
    if (scrollY + visibleHeight >= pageHeight - 100) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIfBottom);
    return () => {
      window.removeEventListener("scroll", checkIfBottom);
    };
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  if (!visible) return null; // hide if not visible

  return (
    <div
      onClick={scrollToBottom}
      style={{
        position: "fixed",
        left: "3vh",
        bottom: "3vh",
        height: "4vh",
        width: "4vh`",
        backgroundColor: "transparent",
        color: "#5a6571",
        cursor: "pointer",
        fontSize: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5vh",
        border: "0.2vh solid #5a6571",
        zIndex: 1000,
      }}
    >
      ↓
    </div>
  );
};

export default ScrollToBottom;
