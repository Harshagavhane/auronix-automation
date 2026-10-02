import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(
      localStorage.getItem("auronixUsers") || "[]"
    );

    const user = users.find(
      (item) =>
        item.email === email &&
        item.password === password
    );

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem(
      "auronixUser",
      JSON.stringify(user)
    );

    navigate("/services");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link to="/" className="auth-logo">
          AURONIX
        </Link>

        <div className="section-label">CLIENT PORTAL</div>

        <h1>Welcome back.</h1>

        <p>
          Login to continue to your Auronix automation portal.
        </p>

        <form onSubmit={handleSubmit}>
          <label>EMAIL ADDRESS</label>

          <input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>PASSWORD</label>

          <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <div className="form-error">{error}</div>}

          <button type="submit" className="auth-submit">
            LOGIN →
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <Link to="/register">Create account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;