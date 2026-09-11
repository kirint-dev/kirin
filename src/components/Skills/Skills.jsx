import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>

      <div className="skill-list">
        <div><FaHtml5 /><p>HTML</p></div>
        <div><FaCss3Alt /><p>CSS</p></div>
        <div><FaJs /><p>JavaScript</p></div>
        <div><FaReact /><p>React</p></div>
        <div><FaNodeJs /><p>Node.js</p></div>
        <div><FaGithub /><p>GitHub</p></div>
      </div>
    </section>
  );
}

export default Skills;
