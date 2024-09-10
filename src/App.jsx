import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
/* import Home from "./components/Home"; */
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Home2 } from "./components/Home2";

const App = () => {
  return (
    <>
      <Navbar />
      <Home2 />
      {/* <Home /> */}
      <About />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
