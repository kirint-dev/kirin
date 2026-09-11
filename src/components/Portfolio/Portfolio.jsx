import "./Portfolio.css";

function Portfolio() {
  const projects = [
    {
      title: "Web Application",
      description: "React Web Development Project",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio developed with React.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Programming Project",
      description: "Computer Science Project",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2>My Portfolio</h2>

      <div className="project-list">
        {projects.map((project) => (
          <div className="project" key={project.title}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
