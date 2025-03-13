import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
    return (
        <Navbar 
            expand="lg" 
            variant="dark" 
            className="header py-3 shadow-sm"
        >
            <Container>
                <Navbar.Brand href="/" className="fw-bold fs-4">
                    🤿 Scuba Gear Picker
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className="px-3 fw-medium">Home</Nav.Link>
                        <Nav.Link href="/build" className="px-3 fw-medium">Start Build</Nav.Link>
                        <Nav.Link href="/gear" className="px-3 fw-medium">View Gear</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header