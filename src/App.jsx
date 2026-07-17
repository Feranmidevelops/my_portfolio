import React from "react";
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
import { Testimonials } from "./components/sections/Testimonials";
import { Connect } from "./components/sections/Connect";
import { Contact } from "./components/sections/Contact";
import "./styles/globals.css";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <RoleProvider>
        <div className="App">
          <Navbar />
          <main className="max-w-3xl mx-auto px-5">
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Testimonials />
            <Connect />
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
