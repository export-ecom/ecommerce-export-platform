import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card shadow-lg p-4" style={{ maxWidth: "450px", width: "100%" }}>

                {/* Toggle Buttons */}
                <div className="btn-group mb-4 w-100">
                    <button
                        className={`btn ${isLogin ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        className={`btn ${!isLogin ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => setIsLogin(false)}
                    >
                        Register
                    </button>
                </div>

                {/* Animated form */}
                <div className="fade show">
                    {isLogin ? <LoginForm /> : <RegisterForm />}
                </div>
            </div>
        </div>
    );
}
