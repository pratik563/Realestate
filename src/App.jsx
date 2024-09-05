import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
