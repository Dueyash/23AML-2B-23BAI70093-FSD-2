import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">Bootstrap UI</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4">Welcome to Bootstrap UI</h1>
              <p className="lead">A responsive user interface designed with Bootstrap components</p>
              <button className="btn btn-primary btn-lg me-2">Get Started</button>
              <button className="btn btn-outline-primary btn-lg">Learn More</button>
            </div>
            <div className="col-md-6">
              <img src="https://via.placeholder.com/500x300" alt="Hero" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Bootstrap Buttons</h2>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-danger">Danger</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-info">Info</button>
          <button className="btn btn-light">Light</button>
          <button className="btn btn-dark">Dark</button>
          <button className="btn btn-link">Link</button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container my-5" id="features">
        <h2 className="text-center mb-4">Bootstrap Cards</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Card 1" />
              <div className="card-body">
                <h5 className="card-title">Responsive Design</h5>
                <p className="card-text">Build responsive and mobile-first websites with Bootstrap's grid system and components.</p>
                <a href="#responsive" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Card 2" />
              <div className="card-body">
                <h5 className="card-title">Pre-built Components</h5>
                <p className="card-text">Access a wide variety of ready-to-use components like buttons, forms, navbars, and more.</p>
                <a href="#components" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Card 3" />
              <div className="card-body">
                <h5 className="card-title">Easy Customization</h5>
                <p className="card-text">Customize Bootstrap components to match your brand with Sass variables and utilities.</p>
                <a href="#customization" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container my-5" id="contact">
        <h2 className="text-center mb-4">Contact Form</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name" 
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com" 
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4" 
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="newsletter" />
                    <label className="form-check-label" htmlFor="newsletter">
                      Subscribe to our newsletter
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <p className="mb-0">&copy; 2026 Bootstrap UI Demo. All rights reserved.</p>
          <p className="mb-0">Designed with Bootstrap Components</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
