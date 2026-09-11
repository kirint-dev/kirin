import { FaGithub } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer id="contact">
      <h2>Contact Me</h2>

      <a
        href="https://github.com/kirint-dev"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub /> GitHub
      </a>

      <p>© 2026 Kirin. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
