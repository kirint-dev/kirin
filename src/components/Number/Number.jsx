import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./Number.css";

function Number() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="numbers" ref={ref}>
      <div>
        <h2>{inView && <CountUp end={10} duration={2} />}+</h2>
        <p>Projects</p>
      </div>

      <div>
        <h2>{inView && <CountUp end={6} duration={2} />}+</h2>
        <p>Skills</p>
      </div>

      <div>
        <h2>{inView && <CountUp end={100} duration={2} />}%</h2>
        <p>Passion</p>
      </div>
    </section>
  );
}

export default Number;
