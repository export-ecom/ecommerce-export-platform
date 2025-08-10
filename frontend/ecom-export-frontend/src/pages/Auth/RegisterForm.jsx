import React, { useState } from "react";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirm) {
            alert("Passwords do not match");
            return;
        }
        console.log("Registering", { name, email, phone, password });
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
                type="tel"
                className="form-control"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
            />
            <button type="submit" className="btn btn-success w-100 btn-animated">
                Register
            </button>
            <div className="text-muted small">Or continue with</div>
            <button type="button" className="btn btn-outline-danger w-100 btn-animated">
                <i className="bi bi-google me-2"></i> Google
            </button>
        </form>
    );
}
