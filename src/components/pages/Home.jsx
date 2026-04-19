import React from "react";
import Footer from "../Layout/Footer";
import useDarkMode from "../common/useDarkMode";
import Header from "../Layout/Header";
import Banner from "../Layout/Banner";
import About from "./About";
import Skills from "../Layout/Skills";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills/>
      <Contact/>
      
    </>
  );
};

export default Home;
