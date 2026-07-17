import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { RoleProvider } from "./context/RoleContext";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Testimonials } from "./components/sections/Testimonials";
import { Resume } from "./components/sections/Resume";
import { Contact } from "./components/sections/Contact";
import "./styles/globals.css";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <RoleProvider>
        <div className="App">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Testimonials />
            <Resume />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </RoleProvider>
    </ThemeProvider>
  );
}

export default App;
