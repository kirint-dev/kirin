import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h3>Hello, I'm</h3>
        <h1>Kirin</h1>

        <TypeAnimation
          sequence={[
            "Computer Science Student",
            1500,
            "Web Developer",
            1500,
            "React Developer",
            1500,
          ]}
          wrapper="h2"
          repeat={Infinity}
        />

        <p>Welcome to my portfolio website.</p>
      </div>

      <Tilt>
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80"
          alt="Computer workspace"
        />
      </Tilt>
    </section>
  );
}

export default Hero;
