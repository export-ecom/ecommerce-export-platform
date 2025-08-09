import React, { useState } from "react";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        console.log("Registering", { name, email, password });
    };

    const handleGoogleLogin = () => {
        console.log("Register with Google");
    };

    return (
        <form onSubmit={handleRegister} className="d-flex flex-column gap-3">
            <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
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
            <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            <button type="submit" className="btn btn-success w-100">
                Register
            </button>

            <div className="text-center fw-bold text-muted">OR</div>

            <button
                type="button"
                className="btn btn-outline-danger w-100"
                onClick={handleGoogleLogin}
            >
                <i className="bi bi-google me-2"></i> Register with Google
            </button>
        </form>
    );
}
