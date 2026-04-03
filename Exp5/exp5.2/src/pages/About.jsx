import React from "react";

function About() {
  return (
    <div className="page">
      <h1>About Page</h1>
      <p>This is the About page, lazy loaded on demand.</p>
      <div className="content">
        <h2>Benefits of Route-Based Lazy Loading:</h2>
        <ul>
          <li>Reduced initial bundle size</li>
          <li>Faster application startup</li>
          <li>Better performance on slower networks</li>
          <li>Improved user experience</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
