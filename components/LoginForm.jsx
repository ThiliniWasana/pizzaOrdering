import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/LoginForm.module.css";

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });
      console.log("Login successful", response.data);
      // Redirect to another page or handle success
      onClose(); // Close the modal on successful login
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2>Login</h2>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.inputField}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.inputField}
          />
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
        <button type="button" className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
