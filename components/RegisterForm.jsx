// RegisterForm.js
import React, { useState } from 'react';
import styles from '../styles/RegisterForm.module.css';

const RegisterForm = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    closeForm(); // Close the form after submission
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.topic}>Register</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={styles.input}
        />
        <button type="submit" className={styles.submitButton}>Register</button>
        <button type="button" className={styles.closeButton} onClick={closeForm}>Close</button>
      </form>
    </div>
  );
};

export default RegisterForm;
