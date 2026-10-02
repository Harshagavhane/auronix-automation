import { Link, useParams } from "react-router-dom";

function RequestSuccess() {
  const { requestId } = useParams();

  const requests = JSON.parse(
    localStorage.getItem("auronixRequests") || "[]"
  );

  const request = requests.find((item) => item.id === requestId);

  if (!request) {
    return (
      <div className="auth-page">
        <div className="auth-card">
          <div className="section-label">REQUEST NOT FOUND</div>

          <h1>We couldn't find this request.</h1>

          <p>
            The request ID may be incorrect or the request may
            have been removed.
          </p>

          <Link to="/services" className="primary-btn">
            BACK TO SERVICES →
          </Link>
        </div>
      </div>
    );
  }

  const submittedDate = new Date(
    request.createdAt
  ).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

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
          NEW REQUEST
        </Link>
      </nav>

      <main className="success-page">
        <div className="success-icon">✓</div>

        <div className="section-label">
          REQUEST SUCCESSFULLY SUBMITTED
        </div>

        <h1>
          Your project is
          <br />
          <span>in motion.</span>
        </h1>

        <p className="success-intro">
          Our engineering team has received your requirement.
          We will review the project details and contact you
          regarding the next steps.
        </p>

        <div className="request-id-card">
          <div>
            <span>REQUEST ID</span>
            <strong>{request.id}</strong>
          </div>

          <div className="status-badge">
            {request.status}
          </div>
        </div>

        <div className="request-summary">
          <div className="summary-item">
            <span>SERVICE</span>
            <strong>{request.serviceName}</strong>
          </div>

          <div className="summary-item">
            <span>PROJECT</span>
            <strong>{request.projectName}</strong>
          </div>

          <div className="summary-item">
            <span>COMPANY</span>
            <strong>{request.companyName}</strong>
          </div>

          <div className="summary-item">
            <span>SUBMITTED</span>
            <strong>{submittedDate}</strong>
          </div>
        </div>

        <div className="success-actions">
          <Link
            to="/dashboard"
            className="primary-btn"
          >
            VIEW DASHBOARD →
          </Link>

          <Link
            to="/services"
            className="secondary-btn"
          >
            BROWSE SERVICES
          </Link>
        </div>

        <div className="tracking-note">
          <span>01</span>
          <div>
            <strong>What happens next?</strong>
            <p>
              Auronix engineers will review your requirement,
              evaluate the technical scope and contact you for
              clarification or quotation.
            </p>
          </div>
        </div>
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

export default RequestSuccess;