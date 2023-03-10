import HeroWork from "../work/HeroWork";
import Portfolio from "../../pages/work/Portfolio";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import React from "react";
import Contact from "../../pages/work/contact/Contact";

const Work = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={`container-home ${theme}`}>
      <HeroWork />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Work;
