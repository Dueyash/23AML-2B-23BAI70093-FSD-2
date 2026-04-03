import React, { useState } from 'react';
import './App.css';

/**
 * Experiment-4: Simple Form SPA
 * Aim: To build a basic form SPA using React.
 * Procedure:
 * 1. Create form fields
 * 2. Store input using state
 * 3. Display submitted data
 */
export default function FormApp() {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [submitted, setSubmitted] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    // Validate that at least name is filled
    if (!form.name.trim()) {
      alert('Please enter your name');
      return;
    }

    setSubmitted(form);
    // Reset form after submission
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <section className="form-section">
      <h2>Experiment-4: Simple Form SPA</h2>
      <p className="form-aim">To build a basic form SPA using React that stores input and displays submitted data.</p>

      <form className="simple-form" onSubmit={handleSubmit}>
        <label className="form-label">Name *</label>
        <input 
          className="form-input" 
          name="name" 
          value={form.name} 
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label className="form-label">Email</label>
        <input 
          className="form-input" 
          name="email" 
          type="email"
          value={form.email} 
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <label className="form-label">Message</label>
        <textarea 
          className="form-textarea" 
          name="message" 
          value={form.message} 
          onChange={handleChange}
          placeholder="Enter your message"
        />

        <button className="btn form-button" type="submit">Submit Form</button>
      </form>

      {submitted && (
        <div className="submitted-data">
          <h3>📋 Submitted Data</h3>
          <p><strong>Name:</strong> {submitted.name}</p>
          <p><strong>Email:</strong> {submitted.email || 'Not provided'}</p>
          <p><strong>Message:</strong> {submitted.message || 'No message'}</p>
        </div>
      )}
    </section>
  );
}
