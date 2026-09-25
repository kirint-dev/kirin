import "./App.css";

const skills = [
  { name: "HTML / CSS", level: "Frontend" },
  { name: "JavaScript", level: "Frontend" },
  { name: "React", level: "Frontend" },
  { name: "PHP / MySQL", level: "Backend" },
  { name: "Git / GitHub", level: "Tools" },
  { name: "UI Design", level: "Design" },
];

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and Vite.",
    tags: ["React", "Vite", "CSS"],
  },
  {
    title: "Student Management",
    description: "CRUD system for managing student information with an API.",
    tags: ["Flutter", "PHP", "MySQL"],
  },
  {
    title: "Travel Post System",
    description:
      "Travel posting concept with profiles, posts, maps, likes and comments.",
    tags: ["Web", "Database", "UI/UX"],
  },
];

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a className="brand" href="#home">
          Kirin
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-content">
            <p className="eyebrow">Hello, I'm</p>

            <h1>Kirin</h1>

            <h2>Computer Science Student</h2>

            <p className="hero-text">
              Welcome to my portfolio website. I enjoy building websites,
              applications and learning new technologies.
            </p>

            <div className="hero-buttons">
              <a className="btn primary" href="#portfolio">
                View Portfolio
              </a>

              <a className="btn secondary" href="#contact">
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">What I use</p>

            <h2>Skills</h2>

            <p>
              Technologies and tools that I am learning and using in projects.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.name}>
                <div className="skill-icon">✦</div>

                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.level}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="portfolio" className="section portfolio-section">
          <div className="section-heading">
            <p className="eyebrow">My work</p>

            <h2>Portfolio</h2>

            <p>Some projects and coursework that I have worked on.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-preview">
                  <span>&lt;/&gt;</span>
                </div>

                <div className="project-body">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Get in touch</p>

              <h2>Contact Me</h2>

              <p>
                Interested in my work or want to get in touch? You can contact
                me through the information below.
              </p>
            </div>

            <div className="contact-links">
              <a href="mailto:your-email@example.com">
                ✉ your-email@example.com
              </a>

              <a
                href="https://github.com/kirint-dev"
                target="_blank"
                rel="noreferrer"
              >
                ◉ github.com/kirint-dev
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Kirin. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
