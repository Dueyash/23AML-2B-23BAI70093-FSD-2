import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Page Components
const Home = () => <div className="container mt-5"><h1>Home Page</h1><p>Welcome to our website!</p></div>;
const Products = () => <div className="container mt-5"><h1>Products</h1><p>Explore our products.</p></div>;
const About = () => <div className="container mt-5"><h1>About Us</h1><p>Learn more about our company.</p></div>;
const Contact = () => <div className="container mt-5"><h1>Contact</h1><p>Get in touch with us.</p></div>;
const Services = () => <div className="container mt-5"><h1>Services</h1><p>Our professional services.</p></div>;

// Navbar Component
function ResponsiveNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow">
      <div className="container">
        {/* Brand/Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeNavbar}>
          <span className="fw-bold fs-4">BrandName</span>
          <span className="badge bg-light text-primary ms-2">Pro</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
          {/* Main Navigation Links - Left Side */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/" 
                onClick={closeNavbar}
                style={({ isActive }) => ({
                  fontWeight: isActive ? 'bold' : 'normal',
                  backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : 'transparent'
                })}
              >
                <i className="bi bi-house-door me-1"></i> Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#products" 
                role="button" 
                data-bs-toggle="dropdown"
                onClick={closeNavbar}
              >
                <i className="bi bi-box-seam me-1"></i> Products
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/products" onClick={closeNavbar}>All Products</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#electronics" onClick={closeNavbar}>Electronics</a></li>
                <li><a className="dropdown-item" href="#clothing" onClick={closeNavbar}>Clothing</a></li>
                <li><a className="dropdown-item" href="#books" onClick={closeNavbar}>Books</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/services" 
                onClick={closeNavbar}
                style={({ isActive }) => ({
                  fontWeight: isActive ? 'bold' : 'normal'
                })}
              >
                <i className="bi bi-gear me-1"></i> Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/about" 
                onClick={closeNavbar}
                style={({ isActive }) => ({
                  fontWeight: isActive ? 'bold' : 'normal'
                })}
              >
                <i className="bi bi-info-circle me-1"></i> About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/contact" 
                onClick={closeNavbar}
                style={({ isActive }) => ({
                  fontWeight: isActive ? 'bold' : 'normal'
                })}
              >
                <i className="bi bi-telephone me-1"></i> Contact
              </NavLink>
            </li>
          </ul>

          {/* Search Bar - Visible on desktop, hidden on mobile */}
          <form className="d-none d-lg-flex me-3" role="search">
            <div className="input-group">
              <input 
                type="search" 
                className="form-control" 
                placeholder="Search..." 
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>

          {/* User Actions - Right Side */}
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle d-flex align-items-center" 
                href="#user" 
                role="button" 
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-person-circle me-1"></i>
                <span className="d-none d-md-inline">Account</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#profile"><i className="bi bi-person me-2"></i>Profile</a></li>
                <li><a className="dropdown-item" href="#settings"><i className="bi bi-gear me-2"></i>Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item text-danger" href="#logout"><i className="bi bi-box-arrow-right me-2"></i>Logout</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link position-relative" href="#cart">
                <i className="bi bi-cart3"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  3
                </span>
              </a>
            </li>
            <li className="nav-item d-lg-none mt-2">
              {/* Mobile Search */}
              <div className="input-group">
                <input 
                  type="search" 
                  className="form-control" 
                  placeholder="Search..." 
                  aria-label="Search"
                />
                <button className="btn btn-outline-primary" type="button">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <ResponsiveNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      {/* Responsive Behavior Info */}
      <div className="container mt-5">
        <div className="card">
          <div className="card-header bg-info text-white">
            <h5 className="mb-0">Responsive Behavior</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <div className="text-center p-3 border rounded">
                  <i className="bi bi-phone fs-1 text-primary"></i>
                  <h6 className="mt-2">Mobile View</h6>
                  <p className="text-muted small">Hamburger menu with collapsed navigation</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center p-3 border rounded">
                  <i className="bi bi-tablet fs-1 text-primary"></i>
                  <h6 className="mt-2">Tablet View</h6>
                  <p className="text-muted small">Adaptive layout with visible main links</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center p-3 border rounded">
                  <i className="bi bi-laptop fs-1 text-primary"></i>
                  <h6 className="mt-2">Desktop View</h6>
                  <p className="text-muted small">Full navigation bar with search and user menu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;