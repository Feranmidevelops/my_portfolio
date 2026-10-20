import React from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import { RoleProvider } from "./context/RoleContext";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Skills } from "./components/sections/Skills";
import { Credentials } from "./components/sections/Credentials";
import { Connect } from "./components/sections/Connect";
import { Contact } from "./components/sections/Contact";
import "./styles/globals.css";
import "./App.css";

// domAnimation is the animation subset the site uses, without drag or layout
// animations: about 13 kB gzipped less JS. strict makes any leftover
// motion.* element throw, so components use m.* instead.
function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <ThemeProvider>
        <RoleProvider>
          <div className="App">
            <Navbar />
            <main className="max-w-3xl mx-auto px-5">
              <Hero />
              <About />
              <Projects />
              <Experience />
              <Credentials />
              <Skills />
              <Connect />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </RoleProvider>
      </ThemeProvider>
    </LazyMotion>
  );
}

export default App;
