import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Home />
      <About />
      <Service />
      <Contact />
    </>
  );
}

export default App;
