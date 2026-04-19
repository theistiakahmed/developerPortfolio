import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./animation.css";
import imgOne from "/src/assets/react.svg"
import imgTwo from "/src/assets/nextjs.png"
import imgThree from "/src/assets/tailwindcss.png"
import imgFour from "/src/assets/bootstrap.png"
import imgFive from "/src/assets/redux.png"
import imgSix from "/src/assets/js.png"

const Animation = () => {
  const [text, setText] = useState("");

  const getIcon = () => {
    if (text.includes("React")) return <img className="w-10 h-10 inline" src={imgOne} alt="react.svg" />;
    if (text.includes("Frontend")) return "💻";
    if (text.includes("Next.js")) return <img className="w-10 h-10 inline" src={imgTwo} alt="nextjs.png"/>;
    if (text.includes("TailwindCss")) return <img className="w-10 h-10 inline" src={imgThree} alt="tailwindcss.png"/>;
    if (text.includes("Bootstrap")) return <img className="w-10 h-10 inline" src={imgFour} alt="bootstrap.png"/>;
    if (text.includes("Redux")) return <img className="w-10 h-10 inline"src={imgFive} alt="redux.png"/>;

    return <img className="w-10 h-10 inline" src={imgSix} alt="js.png"/>;
  };

  return (
    <h1 className="title">
      <Typewriter
        words={[
          "a Technology Engineer",
          "a Frontend Developer",
          "a React Developer",
          "a Next.js Developer",
          "a TailwindCss Developer",
          "a Bootstrap Developer",
          "a Redux Developer",
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1500}
        onType={(count) => {
          const words = [
            "a Technology Engineer",
            "a Frontend Developer",
            "a React Developer",
            "a Next.js Developer",
            "a TailwindCss Developer",
            "a Bootstrap Developer",
            "a Redux Developer",
          ];
          setText(words[count % words.length]);
        }}
      />

      <span className="tag">{getIcon()}</span>
    </h1>
  );
};

export default Animation;