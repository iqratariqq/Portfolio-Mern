import React, { useEffect, useRef, useState } from "react";
import { Circle } from "@rc-component/progress";
import "./Progressbar.css";

const Progressbar = ({ width }) => {
  const targetRef = useRef(null);                // Create a reference to the element
  const [percent, setPercent] = useState(0);     // Start progress at 0%

  useEffect(() => {
  const currentRef = targetRef.current; // ✅ Copy ref to a local variable

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const finalValue = parseInt(width);
          let current = 0;

          const interval = setInterval(() => {
            if (current < finalValue) {
              current += 1;
              setPercent(current);
            } else {
              clearInterval(interval);
            }
          }, 15);
        }
      });
    },
    { threshold: 0.5 }
  );

  if (currentRef) {
    observer.observe(currentRef); // ✅ Use local ref variable
  }

  return () => {
    if (currentRef) {
      observer.unobserve(currentRef); // ✅ Use same local ref here too
    }
  };
}, [width]);

  return (

  <div className="progress-bar" ref={targetRef}>
    <div className="circle-wrapper">
      <Circle
        percent={percent}
        strokeWidth={7}
        strokeColor="rgba(3, 248, 248, 0.5)"
        railWidth={2}
        railColor=" rgb(146, 144, 144)"
      />
    </div>
    <div className="progress-text">{percent}%</div>
  </div>

  );
};

export default Progressbar;
