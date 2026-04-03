import React from "react";
import "./profile.css";

function Profile() {
  const projects = [
    {
      name: "Dream Partner",
      description:
        "A game platform to find your ideal partner based on compatibility.",
      language: "Godot, React, Node.js, Python",
    },
    {
      name: "Green prompt",
      description: "Making the world better one prompt at a time",
      language: "Python, Electron, React",
    },
    {
      name: "Muck",
      description:
        "A website where you can collab with your peers to make documents",
      language: "React, Drizzle, Node.js, Docker",
    },
  ];

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <div className="profile-avatar">
          <img src="/shine2.jpg" alt="Profile" />
        </div>
        <h1 className="profile-name">Yash </h1>
        <a href="https://github.com/Dueyash">@Dueyash</a>
        <p className="profile-bio">
          Full-stack developer passionate about building web applications. Love
          React, Node.js, and open source.
        </p>
      </div>
      <div className="profile-main">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                <span className="project-language">
                  <span className="language-dot"></span>
                  {project.language}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Profile;
