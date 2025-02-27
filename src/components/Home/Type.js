import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-End Developer",
          "Teamleader at Najot Ta'lim among students",
          "Adminstrator at Najot Ta'lim",
          "Support Teacher at Najot Ta'lim",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
