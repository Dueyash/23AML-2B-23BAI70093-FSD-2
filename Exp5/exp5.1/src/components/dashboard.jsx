import React from "react";
import "./dashboard.css";

function Dashboard() {
  const skills = [
    "React",
    "JavaScript",
    "HTML/CSS",
    "Node.js",
    "Python",
    "Git",
    "Blender",
  ];

  return (
    <div className="page">
      <h1 style={{color:"#ffffff"}}>Skills Dashboard</h1>
      <p style={{color: "#ffffff"}}>Welcome to the dashboard page!</p>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
