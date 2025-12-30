"use client";
import "./fade.css";

import React, { useState } from "react";

const Fade = () => {
  const [fade, setFade] = useState(false);

  const triggerFade = () => {
    console.log("click");
    setFade((prevState) => {
      // where is prevstate from
      return !prevState;
    });
  };

  return (
    <>
      <div
        onAnimationEnd={triggerFade} // what's happening here
        // transition duration-1000 ease-in-out transition-discrete`}
        className={`${fade ? "invisible fadedClass" : "visible visibleClass"}`}
      >
        Watch me fade
      </div>
      <button onClick={triggerFade}>Click Me</button>
    </>
  );
};

export default Fade;
