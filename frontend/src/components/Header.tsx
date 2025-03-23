import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" variant="dark" className="header py-3 shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-4">
          🤿 Scuba Gear Picker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="px-3 fw-medium">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/build" className="px-3 fw-medium">
              Start Build
            </Nav.Link>
            <Nav.Link as={Link} to="/gear" className="px-3 fw-medium">
              View Gear
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="px-3 fw-medium">
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
