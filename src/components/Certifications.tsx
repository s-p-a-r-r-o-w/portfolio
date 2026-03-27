import { BadgeCheck, ExternalLink } from "lucide-react";
import { SiCoursera, SiDocker } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import elasticLogo from "../assets/elastic-logo.svg";
import ibmLogo from "../assets/ibm-svgrepo.svg";
import { certifications } from "../data";
import BorderGlow from "./BorderGlow";

const getIssuerIcon = (issuer: string) => {
  if (issuer.includes("Coursera")) return <SiCoursera size={28} className="cert-icon" color="#0056D2" />;
  if (issuer.includes("Docker")) return <SiDocker size={28} className="cert-icon" color="#2496ED" />;
  if (issuer.includes("Microsoft")) return <FaMicrosoft size={28} className="cert-icon" color="#0078D4" />;
  if (issuer.includes("IBM")) return <img src={ibmLogo} alt="IBM" style={{ width: 28, height: 28 }} />;
  if (issuer.includes("Elastic")) return <img src={elasticLogo} alt="Elastic" style={{ width: 28, height: 28 }} />;
  return <BadgeCheck size={24} className="cert-icon" />;
};

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <h3 className="section-label">Certifications</h3>
      <div className="certs-grid">
        {certifications.map((c) => (
          <BorderGlow key={c.title} className="cert-card" borderRadius={0}>
            {getIssuerIcon(c.issuer)}
            <div className="cert-body">
              <h4 className="cert-title">{c.title}</h4>
              <p className="cert-issuer">{c.issuer} · {c.date}</p>
            </div>
            <a href={c.credentialUrl} target="_blank" rel="noreferrer" className="cert-link">
              <ExternalLink size={16} />
            </a>
          </BorderGlow>
        ))}
      </div>
    </section>
  );
}