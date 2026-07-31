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
import Projects from "./Components/Projects";
import GmailModel from "./Components/GmailModel";
import ProjectViewModel from "./Components/ProjectViewModel";

function App() {
  const[contact,setContact] = useState(false);

  return (
    <>
      {/* <NavBar></NavBar> */}
      <Home contact={contact} setContact={setContact}/>
      <Projects />
      {/* <ProjectViewModel /> */}
      <Service />
      <About />
      <Contact />
      {contact && <GmailModel contact={contact} setContact={setContact}/>}
      
    </>
  );
}

export default App;
