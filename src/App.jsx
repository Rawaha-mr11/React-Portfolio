import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Testimonial from "./components/Testimonial";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  const changeTheme = () => {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="relative">
        <Header currentTheme={currentTheme} changeTheme={changeTheme} />
        <Hero currentTheme={currentTheme} />
        <About currentTheme={currentTheme} />
        <Services currentTheme={currentTheme} />
        <Technologies currentTheme={currentTheme} />
        <Resume currentTheme={currentTheme} />
        <Testimonial currentTheme={currentTheme} />
        <Portfolio currentTheme={currentTheme} />
        <Contact currentTheme={currentTheme} />
        <Footer currentTheme={currentTheme} />
      </div>
    </>
  );
};

export default App;
