import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in", { email, password });
  };

  return (
    <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
      <input
        type="email"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="btn btn-primary w-100 btn-animated">
        Login
      </button>
      <div className="text-muted small">Or continue with</div>
      <button type="button" className="btn btn-outline-danger w-100 btn-animated">
        <i className="bi bi-google me-2"></i> Google
      </button>
    </form>
  );
}
