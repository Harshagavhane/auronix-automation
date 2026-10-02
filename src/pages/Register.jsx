import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !form.name ||
      !form.email ||
      !form.mobile ||
      !form.company ||
      !form.password
    ) {
      setError("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/notify-registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            mobile: form.mobile,
            company: form.company,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Backend request failed.");
      }

      const result = await response.json();

      console.log("Backend response:", result);

      const users = JSON.parse(
        localStorage.getItem("auronixUsers") || "[]"
      );

      const existingUser = users.find(
        (user) => user.email === form.email
      );

      if (existingUser) {
        setError("An account with this email already exists.");
        setLoading(false);
        return;
      }

      const newUser = {
        name: form.name,
        email: form.email,
        mobile: form.mobile,
        company: form.company,
        password: form.password,
      };

      users.push(newUser);

      localStorage.setItem(
        "auronixUsers",
        JSON.stringify(users)
      );

      localStorage.setItem(
        "auronixUser",
        JSON.stringify(newUser)
      );

      navigate("/services");
    } catch (error) {
      console.error(error);

      setError(
        "Unable to connect to Auronix server. Make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <Link to="/" className="logo">
          AURONIX
        </Link>

        <div className="section-label">
          CLIENT REGISTRATION
        </div>

        <h1>
          Create your
          <br />
          account.
        </h1>

        <p className="auth-subtitle">
          Register your business to start a project with
          Auronix Automation.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-field">
            <label>FULL NAME *</label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
          </div>

          <div className="form-field">
            <label>EMAIL ADDRESS *</label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
            />
          </div>

          <div className="form-field">
            <label>MOBILE NUMBER *</label>

            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div className="form-field">
            <label>COMPANY / BUSINESS *</label>

            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company name"
            />
          </div>

          <div className="form-field">
            <label>PASSWORD *</label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create password"
            />
          </div>

          {error && (
            <div className="request-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="primary-btn"
            disabled={loading}
          >
            {loading
              ? "CREATING ACCOUNT..."
              : "CREATE ACCOUNT →"}
          </button>

        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login">LOGIN</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;