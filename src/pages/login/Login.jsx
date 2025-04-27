import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" />
          </div>
          <div className="remember-forgot">
            <label htmlFor="">
              <input type="checkbox" /> Remember Me
            </label>
            <a href="/#">Forgot Password</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              don't have an account? <Link to="https://e-commerce-psi-seven-91.vercel.app/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
