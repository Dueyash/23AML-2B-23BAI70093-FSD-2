import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Email validation
  const validateEmail = (email) => {
    if (!email) {
      return "Email is required";
    }

    // Check for @ symbol
    if (!email.includes("@")) {
      return "Email must contain @ symbol";
    }

    // Check for valid domain (.com, .in, or any country code)
    const domainPattern = /\.[a-z]{2,}$/i;
    if (!domainPattern.test(email)) {
      return "Email must end with a valid domain (e.g., .com, .in, etc.)";
    }

    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(email)) {
      return "Please enter a valid email address";
    }

    return "";
  };

  // Password validation
  const validatePassword = (password) => {
    if (!password) {
      return "Password is required";
    }

    // Check if starts with capital letter
    if (!/^[A-Z]/.test(password)) {
      return "Password must start with a capital letter";
    }

    // Check for at least one number
    if (!/\d/.test(password)) {
      return "Password must contain at least one number";
    }

    // Check for at least one special character
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      return "Password must contain at least one special character";
    }

    // Check for minimum 5 characters
    if (password.length < 5) {
      return "Password must be at least 5 characters long";
    }

    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    setErrors({
      email: emailError,
      password: passwordError,
    });

    // If no errors, submit the form
    if (!emailError && !passwordError) {
      setIsSubmitted(true);
      console.log("Form submitted successfully:", formData);
    }
  };

  return (
    <div className="App">
      <div className="form-container">
        <h1>Client-Side Form Validation</h1>

        {isSubmitted && (
          <div className="success-message">Form submitted successfully! ✓</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email ID:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? "input-error" : ""}
              placeholder="Enter your email"
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={errors.password ? "input-error" : ""}
              placeholder="Enter your password"
            />
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
            <div className="password-requirements">
              <small>Password must:</small>
              <ul>
                <li>Start with a capital letter</li>
                <li>Contain at least one number</li>
                <li>Contain at least one special character</li>
                <li>Be at least 5 characters long</li>
              </ul>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
