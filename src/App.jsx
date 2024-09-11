import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
/* import Home from "./components/Home"; */
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Home2 } from "./components/Home2";

const App = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Home2 />
      {/* <Home /> */}
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
