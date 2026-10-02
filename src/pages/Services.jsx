import { Link } from "react-router-dom";

const services = [
  {
    id: "industrial-automation",
    title: "Industrial Automation",
    description:
      "End-to-end turnkey automation and system integration for factories and process plants.",
    points: [
      "Turnkey automation projects",
      "Retrofits & upgrades",
      "System integration",
    ],
  },
  {
    id: "plc-programming",
    title: "PLC Programming",
    description:
      "Robust and well-documented PLC logic for leading industrial automation platforms.",
    points: [
      "Ladder / FBD / Structured Text",
      "Commissioning",
      "PLC troubleshooting",
    ],
  },
  {
    id: "panel-designing",
    title: "Panel Designing",
    description:
      "Electrical schematics, layouts and control panel solutions built for industrial environments.",
    points: [
      "MCC & PLC panels",
      "Electrical design",
      "Manufacturing & testing",
    ],
  },
  {
    id: "scada-hmi",
    title: "SCADA & HMI",
    description:
      "Modern visualization and monitoring systems that give operators complete control.",
    points: [
      "SCADA development",
      "HMI screens",
      "Industrial monitoring",
    ],
  },
  {
    id: "vfd-drives",
    title: "VFD & Drives",
    description:
      "Motor control and variable frequency drive solutions for efficient industrial operation.",
    points: [
      "VFD programming",
      "Motor control",
      "Drive commissioning",
    ],
  },
];

function Services() {
  return (
    <div className="portal-page">
      <nav className="navbar">
        <Link to="/" className="logo">
          AURONIX
        </Link>

        <div className="nav-links">
          <Link to="/services">Services</Link>
          <Link to="/">Home</Link>
        </div>

        <Link to="/login" className="quote-btn">
          LOGIN
        </Link>
      </nav>

      <section className="portal-header">
        <div className="section-label">AURONIX SERVICES</div>

        <h1>
          Choose your
          <br />
          automation solution.
        </h1>

        <p>
          Explore our engineering services and find the right
          solution for your industrial requirement.
        </p>
      </section>

      <section className="service-list">
        {services.map((service, index) => (
          <div className="service-detail-card" key={service.id}>
            <div className="service-detail-number">
              0{index + 1}
            </div>

            <div>
              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <ul>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <Link
                to={`/services/${service.id}`}
                className="primary-btn"
              >
                VIEW DETAILS →
              </Link>
            </div>
          </div>
        ))}
      </section>

      <footer>
        <span>© 2026 Auronix Automation. All rights reserved.</span>
        <span>PLC · SCADA · HMI · VFD · PANELS</span>
      </footer>
    </div>
  );
}

export default Services;