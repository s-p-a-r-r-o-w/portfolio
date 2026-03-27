import { experience } from "../data";
import BorderGlow from "./BorderGlow";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h3 className="section-label">Experience</h3>
      <div className="timeline">
        {experience.map((e) => (
          <BorderGlow key={e.role} className="timeline-item" borderRadius={0}>
            <div className="timeline-header">
              <div>
                <h4 className="timeline-role">{e.role}</h4>
                <p className="timeline-company">{e.company}</p>
                <p className="timeline-location">{e.location}</p>
              </div>
              <span className="timeline-period">{e.period}</span>
            </div>
            <ul className="timeline-points">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </BorderGlow>
        ))}
      </div>
    </section>
  );
}