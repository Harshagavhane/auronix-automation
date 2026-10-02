import { Link, useNavigate, useParams } from "react-router-dom";

export const serviceData = {
  "industrial-automation": {
    title: "Industrial Automation",
    intro:
      "Complete automation solutions designed to improve productivity, reliability and control across industrial operations.",
    overview:
      "Auronix can design and integrate automation systems from the initial engineering stage through commissioning and support.",
    provide: [
      "PLC and control system integration",
      "Machine and process automation",
      "Industrial communication",
      "Retrofit and modernization",
      "Commissioning and testing",
    ],
    applications: [
      "Manufacturing plants",
      "Process industries",
      "Production lines",
      "Packaging systems",
    ],
    benefits: [
      "Higher productivity",
      "Reduced manual intervention",
      "Better process control",
      "Improved reliability",
    ],
  },

  "plc-programming": {
    title: "PLC Programming",
    intro:
      "Reliable PLC programming for machines, production lines and industrial control systems.",
    overview:
      "Our engineers develop structured and documented PLC programs designed for reliable operation and easier maintenance.",
    provide: [
      "Ladder Logic",
      "Function Block Diagram",
      "Structured Text",
      "PLC commissioning",
      "Troubleshooting and modifications",
    ],
    applications: [
      "Machine automation",
      "Conveyor systems",
      "Production lines",
      "Industrial machinery",
    ],
    benefits: [
      "Reliable machine operation",
      "Easy troubleshooting",
      "Structured programming",
      "Scalable automation",
    ],
  },

  "panel-designing": {
    title: "Panel Designing",
    intro:
      "Professional electrical design and control panel solutions for industrial automation systems.",
    overview:
      "Auronix provides engineering and design support for MCC, PLC and control panels with focus on safety and maintainability.",
    provide: [
      "Electrical schematics",
      "Panel layout",
      "MCC panels",
      "PLC panels",
      "Testing and documentation",
    ],
    applications: [
      "Factories",
      "Industrial machines",
      "Production systems",
      "Process plants",
    ],
    benefits: [
      "Clean electrical design",
      "Improved safety",
      "Easy maintenance",
      "Better system organization",
    ],
  },

  "scada-hmi": {
    title: "SCADA & HMI",
    intro:
      "Modern industrial visualization systems for monitoring and controlling your plant.",
    overview:
      "SCADA and HMI systems give operators real-time visibility into machines, processes, alarms and production data.",
    provide: [
      "SCADA development",
      "HMI screen development",
      "Alarm systems",
      "Data visualization",
      "Industrial monitoring",
    ],
    applications: [
      "Production monitoring",
      "Process control",
      "Machine monitoring",
      "Plant dashboards",
    ],
    benefits: [
      "Real-time visibility",
      "Better decision making",
      "Centralized monitoring",
      "Improved operator control",
    ],
  },

  "vfd-drives": {
    title: "VFD & Drives",
    intro:
      "Efficient motor control and variable frequency drive solutions for industrial applications.",
    overview:
      "We configure, program and commission drives for precise motor speed and process control.",
    provide: [
      "VFD configuration",
      "Drive programming",
      "Motor control",
      "Speed control",
      "Drive commissioning",
    ],
    applications: [
      "Pumps",
      "Conveyors",
      "Fans",
      "Industrial machinery",
    ],
    benefits: [
      "Better motor control",
      "Energy efficiency",
      "Smooth operation",
      "Reduced mechanical stress",
    ],
  },
};

function ServiceDetails() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = serviceData[serviceId];

  if (!service) {
    return (
      <div className="auth-page">
        <div className="auth-card">
          <h1>Service not found.</h1>
          <Link to="/services" className="primary-btn">
            BACK TO SERVICES
          </Link>
        </div>
      </div>
    );
  }

  

  return (
    <div className="portal-page">
      <nav className="navbar">
        <Link to="/" className="logo">
          AURONIX
        </Link>

        <div className="nav-links">
          <Link to="/services">All Services</Link>
          <Link to="/">Home</Link>
        </div>

        <Link to="/login" className="quote-btn">
          LOGIN
        </Link>
      </nav>

      <main className="service-page">
        <Link to="/services" className="back-link">
          ← BACK TO SERVICES
        </Link>

        <div className="section-label">SERVICE  /  AURONIX</div>

        <h1>{service.title}</h1>

        <p className="service-intro">{service.intro}</p>

        <div className="service-overview">
          <h2>Overview</h2>
          <p>{service.overview}</p>
        </div>

        <div className="info-grid">
          <div className="info-box">
            <span>01</span>
            <h3>WHAT WE PROVIDE</h3>

            <ul>
              {service.provide.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="info-box">
            <span>02</span>
            <h3>APPLICATIONS</h3>

            <ul>
              {service.applications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="info-box">
            <span>03</span>
            <h3>BENEFITS</h3>

            <ul>
              {service.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="service-request">
          <div>
            <div className="section-label">READY TO START?</div>
            <h2>Request this service.</h2>
            <p>
              Submit your requirements and our engineering team
              can review your project.
            </p>
          </div>

          <Link
  to={`/services/${serviceId}/request`}
  className="primary-btn"
>
  REQUEST THIS SERVICE →
</Link>
        </div>
      </main>

      <footer>
        <span>© 2026 Auronix Automation. All rights reserved.</span>
        <span>PLC · SCADA · HMI · VFD · PANELS</span>
      </footer>
    </div>
  );
}

export default ServiceDetails;