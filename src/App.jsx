import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import IntroAnimation from "./components/IntroAnimation";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <IntroAnimation onFinish={() => setShowIntro(false)} />
      )}

      {!showIntro && (
        <div className="relative min-h-screen gradient text-white bg-gray-950">
          <ParticlesBackground />

          <div className="relative z-10">
            <Navbar />
            <Home />
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;