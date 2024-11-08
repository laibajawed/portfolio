import React from "react";

import Skills from "../../../components/skills";
import About from "../../../components/about";
import Projects from "../../../components/projects";
import "../style.css";

export default function Home() {
  return (
    <div>
      <About />
      <Skills />
      <Projects />
    </div>
  )
}
