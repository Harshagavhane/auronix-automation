import RequestSuccess from "./pages/RequestSuccess";
import ServiceRequest from "./pages/ServiceRequest";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import "./App.css";

const services = [
  {
    id: "industrial-automation",
    title: "Industrial Automation",
    description:
      "End-to-end automation solutions for factories and process plants.",
  },
  {
    id: "plc-programming",
    title: "PLC Programming",
    description:
      "Reliable PLC logic, commissioning and automation programming.",
  },
  {
    id: "panel-designing",
    title: "Panel Designing",
    description:
      "Electrical design and manufacturing of MCC, PLC and control panels.",
  },
  {
    id: "scada-hmi",
    title: "SCADA & HMI",
    description:
      "Smart monitoring, visualization and control systems for your plant.",
  },
  {
    id: "vfd-drives",
    title: "VFD & Drives",
    description:
      "Motor control, speed regulation and drive commissioning solutions.",
  },
];

function Home() {
  return (
    <div className="site">
      <nav className="navbar">
        <Link to="/" className="logo">
          AURONIX
        </Link>

        <div className="nav-links">
          <Link to="/services">Services</Link>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <Link to="/register" className="quote-btn">
          GET A QUOTE ↗
        </Link>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">
              SYSTEMS ONLINE · ENGINEERING THE FUTURE OF INDUSTRY
            </div>

            <h1>
              Intelligent Automation
              <br />
              for Modern Industry.
            </h1>

            <p>
              Auronix Automation designs, programs and commissions control
              systems — from PLC logic and panels to SCADA, drives and fully
              automated machines.
            </p>

            <div className="hero-buttons">
              <Link to="/services" className="primary-btn">
                EXPLORE SERVICES →
              </Link>

              <a href="#contact" className="secondary-btn">
                TALK TO AN ENGINEER
              </a>
            </div>
          </div>

          <div className="scada-card">
            <div className="scada-top">
              <span>● AURONIX SCADA · LINE 01</span>
              <span>ONLINE</span>
            </div>

            <div className="scada-main">
              <div>
                <small>MOTOR SPEED (VFD)</small>
                <strong>1450 RPM</strong>
              </div>

              <div className="scada-circle">
                <span>93.5%</span>
                <small>OEE</small>
              </div>
            </div>

            <div className="scada-bottom">
              <span>START Q0.0</span>
              <span>SAFE M1.2</span>
            </div>
          </div>
        </section>

        <section className="stats">
          <div>
            <strong>15+</strong>
            <span>Years of Expertise</span>
          </div>

          <div>
            <strong>300+</strong>
            <span>Projects Delivered</span>
          </div>

          <div>
            <strong>120+</strong>
            <span>Happy Clients</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Support Available</span>
          </div>
        </section>

        <section className="services-section" id="about">
          <div className="section-label">WHAT WE DO</div>

          <h2>
            Complete automation,
            <br />
            under one roof.
          </h2>

          <p className="section-description">
            Five core disciplines that take your plant from manual to
            intelligent.
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={service.id}>
                <span className="service-number">
                  0{index + 1}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link to={`/services/${service.id}`}>
                  VIEW SERVICE →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div>
            <div className="section-label">START YOUR PROJECT</div>

            <h2>
              Have an automation
              <br />
              challenge?
            </h2>

            <p>
              Tell us what you're building. Our engineering team will help
              define the right solution.
            </p>
          </div>

          <Link to="/register" className="primary-btn">
            GET A QUOTE →
          </Link>
        </section>
      </main>

      <footer>
        <span>© 2026 Auronix Automation. All rights reserved.</span>
        <span>PLC · SCADA · HMI · VFD · PANELS</span>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/:serviceId"
          element={<ServiceDetails />}
        />
        <Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/services" element={<Services />} />

<Route
  path="/services/:serviceId"
  element={<ServiceDetails />}
/>

<Route
  path="/services/:serviceId/request"
  element={<ServiceRequest />}
/>

<Route
  path="/request-success/:requestId"
  element={<RequestSuccess />}
/>
/
      </Routes>
    </BrowserRouter>
  );
}

export default App;