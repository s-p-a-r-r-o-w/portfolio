import { projects } from "../data";
import BorderGlow from "./BorderGlow";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h3 className="section-label">Personal Projects</h3>
      <div className="projects-grid">
        {projects.map((p) => (
          <BorderGlow key={p.title} className="project-card" borderRadius={0}>
            <h4 className="project-title">{p.title}</h4>
            <p className="project-description">{p.description}</p>
            <div className="project-tags">
              {p.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </BorderGlow>
        ))}
      </div>
    </section>
  );
}