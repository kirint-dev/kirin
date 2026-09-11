import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Kirin</h2>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
