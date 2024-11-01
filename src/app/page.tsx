import React from "react";
import Header from "../../components/navbar";
import Skills from "../../components/skills";
import About from "../../components/about";
import Projects from "../../components/projects";
import Contact from "../../components/contact";
import "./style.css";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
