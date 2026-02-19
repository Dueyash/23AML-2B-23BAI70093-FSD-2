import React from "react";

function Contact() {
  return (
    <div className="page">
      <h1>Contact Page</h1>
      <p>This is the Contact page, lazy loaded on demand.</p>
      <div className="content">
        <h2>How to Reach Us:</h2>
        <p>Email: info@example.com</p>
        <p>Phone: +1-800-123-4567</p>
        <p>
          This page uses lazy loading with React.lazy() and Suspense components.
        </p>
      </div>
    </div>
  );
}

export default Contact;
