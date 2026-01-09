import React, { useState } from 'react';
import './App.css';

export default function SimpleForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(form);
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <section className="form-section">
      <p className="form-aim"><br />To build a basic form SPA using React.</p>

      <form className="simple-form" onSubmit={handleSubmit}>
        <label className="form-label">Name</label>
        <input className="form-input" name="name" value={form.name} onChange={handleChange} />

        <label className="form-label">Email</label>
        <input className="form-input" name="email" value={form.email} onChange={handleChange} />

        <label className="form-label">Message</label>
        <textarea className="form-textarea" name="message" value={form.message} onChange={handleChange} />

        <button className="btn form-button" type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="submitted-data">
          <h3>Submitted Data</h3>
          <p><strong>Name:</strong> {submitted.name}</p>
          <p><strong>Email:</strong> {submitted.email}</p>
          <p><strong>Message:</strong> {submitted.message}</p>
        </div>
      )}
    </section>
  );
}
