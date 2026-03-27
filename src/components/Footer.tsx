import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Built by {profile.name} · {new Date().getFullYear()}</p>
    </footer>
  );
}
