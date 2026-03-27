import "./App.css";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import DotGrid from "./components/DotGrid";

export default function App() {
  return (
    <div className="app">
      <DotGrid dotColor="#7B7481" dotSpacing={35} dotSize={1.2} animationSpeed={0.8} />
      <Home />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Footer />
    </div>
  );
}
