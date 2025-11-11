import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/common/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Resume } from "./components/sections/Resume";
import { Contact } from "./components/sections/Contact";
import "./styles/globals.css";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <main>
          <div id="home">
            <Hero />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="projects">
            <Projects />
          </div>

          <div id="resume">
            <Resume />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
