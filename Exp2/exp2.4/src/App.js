import './App.css';
import { useState } from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
  Offcanvas
} from 'react-bootstrap';

function App() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <div className="App">
      {/* Main Responsive Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://via.placeholder.com/30x30/007bff/ffffff?text=R"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Responsive Nav
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="#product1">Product 1</NavDropdown.Item>
                <NavDropdown.Item href="#product2">Product 2</NavDropdown.Item>
                <NavDropdown.Item href="#product3">Product 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#all-products">
                  View All Products
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="hero-section">
        <Container>
          <h1 className="display-3">Responsive Navigation Bar</h1>
          <p className="lead">
            A fully responsive navigation bar built with React Bootstrap
          </p>
          <p>
            Try resizing your browser window to see the navigation bar adapt to different screen sizes.
            On mobile devices, the navigation collapses into a hamburger menu.
          </p>
          <Button variant="primary" size="lg" className="me-2">
            Get Started
          </Button>
          <Button variant="outline-light" size="lg">
            Learn More
          </Button>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="my-5">
        <h2 className="text-center mb-5">Navigation Features</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Responsive</h3>
              <p>
                Automatically collapses into a hamburger menu on smaller screens,
                providing an optimal mobile experience.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>Navigation Links</h3>
              <p>
                Multiple navigation links organized in a clean and accessible
                layout with dropdown menus for subcategories.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Customizable</h3>
              <p>
                Easy to customize colors, styles, and layout using Bootstrap
                variants and CSS classes.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Search Bar</h3>
              <p>
                Integrated search functionality that remains accessible across
                all device sizes.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-card">
              <div className="feature-icon">📂</div>
              <h3>Dropdown Menus</h3>
              <p>
                Organized dropdown menus for better content hierarchy and
                improved navigation structure.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-card">
              <div className="feature-icon">📍</div>
              <h3>Sticky Position</h3>
              <p>
                Navbar stays visible at the top of the page as you scroll,
                ensuring easy navigation at all times.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Alternative Navigation Example - Offcanvas */}
      <Container className="my-5 py-5 bg-light">
        <h2 className="text-center mb-4">Alternative: Offcanvas Navigation</h2>
        <p className="text-center mb-4">
          Another responsive navigation pattern using Bootstrap Offcanvas component
        </p>
        <div className="text-center">
          <Button variant="primary" onClick={handleShowOffcanvas}>
            Open Offcanvas Menu
          </Button>
        </div>

        <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Navigation Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link href="#home" className="border-bottom py-3">🏠 Home</Nav.Link>
              <Nav.Link href="#about" className="border-bottom py-3">ℹ️ About</Nav.Link>
              <Nav.Link href="#services" className="border-bottom py-3">⚙️ Services</Nav.Link>
              <Nav.Link href="#portfolio" className="border-bottom py-3">💼 Portfolio</Nav.Link>
              <Nav.Link href="#contact" className="border-bottom py-3">📧 Contact</Nav.Link>
            </Nav>
            <div className="mt-4">
              <h6>Connect With Us</h6>
              <div className="d-flex gap-2 mt-3">
                <Button variant="outline-primary" size="sm">Facebook</Button>
                <Button variant="outline-info" size="sm">Twitter</Button>
                <Button variant="outline-danger" size="sm">Instagram</Button>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>

      {/* Navbar Variants Section */}
      <Container className="my-5">
        <h2 className="text-center mb-5">Different Navbar Styles</h2>
        
        {/* Light Navbar */}
        <div className="mb-4">
          <h4>Light Navbar</h4>
          <Navbar bg="light" variant="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Light Theme</Navbar.Brand>
              <Navbar.Toggle aria-controls="light-navbar" />
              <Navbar.Collapse id="light-navbar">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        {/* Primary Navbar */}
        <div className="mb-4">
          <h4>Primary Color Navbar</h4>
          <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Primary Theme</Navbar.Brand>
              <Navbar.Toggle aria-controls="primary-navbar" />
              <Navbar.Collapse id="primary-navbar">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        {/* Success Navbar */}
        <div className="mb-4">
          <h4>Success Color Navbar</h4>
          <Navbar bg="success" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Success Theme</Navbar.Brand>
              <Navbar.Toggle aria-controls="success-navbar" />
              <Navbar.Collapse id="success-navbar">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-5">
        <Container>
          <div className="text-center">
            <p className="mb-0">&copy; 2026 Responsive Navigation Demo</p>
            <p className="mb-0">Built with React Bootstrap</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;
