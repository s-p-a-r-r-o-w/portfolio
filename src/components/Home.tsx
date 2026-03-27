import { Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react";
import { profile } from "../data";
import BlurText from "./BlurText";
import GlitchText from "./GlitchText";
import PixelCard from "./PixelCard";
import profileImage from "../assets/ghibli_dp.jpeg";

export default function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-profile">
          <PixelCard 
            variant="blue" 
            className="w-48 h-48 md:w-56 md:h-56"
          >
            <img 
              src={profileImage} 
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </PixelCard>
        </div>

        <p className="hero-greeting">Hi, I'm</p>

        <div className="hero-name-container">
          <BlurText
            text={profile.name}
            delay={120}
            animateBy="words"
            direction="top"
            stepDuration={0.4}
            className="hero-name"
          />
        </div>

        <GlitchText />

        <BlurText
          text={profile.summary}
          delay={40}
          animateBy="words"
          direction="top"
          stepDuration={0.3}
          className="hero-summary"
        />

        <div className="hero-location">
          <MapPin size={16} />
          <span>{profile.location}</span>
        </div>

        <div className="hero-actions">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">Get in touch</a>
          <a href="#experience" className="btn btn-outline">Experience</a>
        </div>

        <div className="hero-socials">
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={20} /></a>
          <a href={`mailto:${profile.email}`}><Mail size={20} /></a>
        </div>
      </div>
      <a href="#skills" className="scroll-hint"><ChevronDown size={24} /></a>
    </section>
  );
}