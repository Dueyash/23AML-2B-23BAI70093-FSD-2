import React, { useState } from "react";
import "./UserForm.css";

function UserForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    skills: [],
    address: "",
    state: "",
  });

  const skillsOptions = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "CSS",
    "HTML",
    "MongoDB",
    "SQL",
  ];

  const stateOptions = [
    "Andhra Pradesh",
    "Goa",
    "Karnataka",
    "Kerala",
    "Maharashtra",
    "Punjab",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenderChange = (e) => {
    setFormData({
      ...formData,
      gender: e.target.value,
    });
  };

  const handleSkillsChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value],
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter((skill) => skill !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const detailsMessage = `
Form Details:
─────────────────────
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Date of Birth: ${formData.dateOfBirth}
Gender: ${formData.gender}
Skills: ${formData.skills.join(", ") || "None selected"}
Address: ${formData.address}
State: ${formData.state}
─────────────────────
    `;

    alert(detailsMessage);
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      skills: [],
      address: "",
      state: "",
    });
  };

  return (
    <div className="form-container">
      <h1>User Registration Form</h1>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter your first name"
            required
          />
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Enter your last name"
            required
          />
        </div>

        {/* Date of Birth */}
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>Gender:</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleGenderChange}
              />
              Male
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleGenderChange}
              />
              Female
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleGenderChange}
              />
              Other
            </label>
          </div>
        </div>

        {/* Skills */}
        <div className="form-group">
          <label>Skills:</label>
          <div className="checkbox-group">
            {skillsOptions.map((skill) => (
              <label key={skill} className="checkbox-label">
                <input
                  type="checkbox"
                  name="skills"
                  value={skill}
                  checked={formData.skills.includes(skill)}
                  onChange={handleSkillsChange}
                />
                {skill}
              </label>
            ))}
          </div>
        </div>

        {/* Address */}
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter your address"
            rows="4"
            required
          />
        </div>

        {/* State */}
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
          >
            <option value="">-- Select a State --</option>
            {stateOptions.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
