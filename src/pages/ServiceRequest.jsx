import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { serviceData } from "./ServiceDetails";

function ServiceRequest() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = serviceData[serviceId];

  const [form, setForm] = useState({
    projectName: "",
    companyName: "",
    contactPerson: "",
    mobile: "",
    email: "",
    existingSystem: "",
    timeline: "",
    budget: "",
    description: "",
  });

  const [error, setError] = useState("");

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

  const user = JSON.parse(
    localStorage.getItem("auronixUser") || "null"
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (
      !form.projectName ||
      !form.companyName ||
      !form.contactPerson ||
      !form.mobile ||
      !form.email ||
      !form.timeline ||
      !form.description
    ) {
      setError("Please fill all required fields.");
      return;
    }

    const requests = JSON.parse(
      localStorage.getItem("auronixRequests") || "[]"
    );

    const requestId =
      "AX-" +
      new Date().getFullYear() +
      "-" +
      String(requests.length + 1).padStart(4, "0");

    const newRequest = {
      id: requestId,
      serviceId,
      serviceName: service.title,
      clientName: user?.name || form.contactPerson,
      email: form.email,
      mobile: form.mobile,
      companyName: form.companyName,
      projectName: form.projectName,
      existingSystem: form.existingSystem,
      timeline: form.timeline,
      budget: form.budget,
      description: form.description,
      status: "UNDER REVIEW",
      createdAt: new Date().toISOString(),
    };

    requests.push(newRequest);

    localStorage.setItem(
      "auronixRequests",
      JSON.stringify(requests)
    );

    localStorage.setItem(
      "auronixLatestRequest",
      JSON.stringify(newRequest)
    );

    navigate(`/request-success/${requestId}`);
  };

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

        <Link to="/services" className="quote-btn">
          CANCEL
        </Link>
      </nav>

      <main className="request-page">
        <Link
          to={`/services/${serviceId}`}
          className="back-link"
        >
          ← BACK TO SERVICE
        </Link>

        <div className="section-label">
          SERVICE REQUEST / {service.title.toUpperCase()}
        </div>

        <h1>
          Tell us about
          <br />
          your project.
        </h1>

        <p className="request-intro">
          Give our engineering team the information they need
          to understand your requirement.
        </p>

        <form
          className="request-form"
          onSubmit={handleSubmit}
        >
          <div className="form-section">
            <div className="form-section-number">01</div>

            <div className="form-section-content">
              <h2>Project Information</h2>

              <div className="form-grid">
                <div className="form-field">
                  <label>PROJECT NAME *</label>
                  <input
                    name="projectName"
                    value={form.projectName}
                    onChange={handleChange}
                    placeholder="e.g. Conveyor Automation"
                  />
                </div>

                <div className="form-field">
                  <label>COMPANY / BUSINESS *</label>
                  <input
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    placeholder="Company name"
                  />
                </div>

                <div className="form-field">
                  <label>CONTACT PERSON *</label>
                  <input
                    name="contactPerson"
                    value={form.contactPerson}
                    onChange={handleChange}
                    placeholder="Full name"
                  />
                </div>

                <div className="form-field">
                  <label>MOBILE NUMBER *</label>
                  <input
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="form-field full-width">
                  <label>EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="form-section-number">02</div>

            <div className="form-section-content">
              <h2>Technical Requirement</h2>

              <div className="form-field">
                <label>EXISTING SYSTEM / CURRENT SETUP</label>

                <textarea
                  name="existingSystem"
                  value={form.existingSystem}
                  onChange={handleChange}
                  placeholder="Tell us about your current machine, PLC, panel or automation setup..."
                  rows="5"
                />
              </div>

              <div className="form-field">
                <label>PROJECT DESCRIPTION *</label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Describe what you want Auronix to build, modify or automate..."
                  rows="7"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="form-section-number">03</div>

            <div className="form-section-content">
              <h2>Project Planning</h2>

              <div className="form-grid">
                <div className="form-field">
                  <label>EXPECTED TIMELINE *</label>

                  <select
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select timeline
                    </option>
                    <option value="Urgent - Within 7 days">
                      Urgent - Within 7 days
                    </option>
                    <option value="1 - 2 weeks">
                      1 - 2 weeks
                    </option>
                    <option value="2 - 4 weeks">
                      2 - 4 weeks
                    </option>
                    <option value="1 - 3 months">
                      1 - 3 months
                    </option>
                    <option value="Flexible">
                      Flexible
                    </option>
                  </select>
                </div>

                <div className="form-field">
                  <label>ESTIMATED BUDGET</label>

                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select budget
                    </option>
                    <option value="Below ₹25,000">
                      Below ₹25,000
                    </option>
                    <option value="₹25,000 - ₹50,000">
                      ₹25,000 - ₹50,000
                    </option>
                    <option value="₹50,000 - ₹1,00,000">
                      ₹50,000 - ₹1,00,000
                    </option>
                    <option value="₹1,00,000 - ₹5,00,000">
                      ₹1,00,000 - ₹5,00,000
                    </option>
                    <option value="₹5,00,000+">
                      ₹5,00,000+
                    </option>
                    <option value="Not decided">
                      Not decided
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {error && (
            <div className="request-error">
              {error}
            </div>
          )}

          <div className="request-submit">
            <div>
              <div className="section-label">
                FINAL STEP
              </div>

              <h2>Ready to submit?</h2>

              <p>
                Our engineering team will review your
                requirements.
              </p>
            </div>

            <button
              type="submit"
              className="primary-btn"
            >
              SUBMIT REQUEST →
            </button>
          </div>
        </form>
      </main>

      <footer>
        <span>
          © 2026 Auronix Automation. All rights reserved.
        </span>

        <span>
          PLC · SCADA · HMI · VFD · PANELS
        </span>
      </footer>
    </div>
  );
}

export default ServiceRequest;