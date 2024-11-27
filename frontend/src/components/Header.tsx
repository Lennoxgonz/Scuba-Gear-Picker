import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar expand="lg" className="bg-warning-subtle">
            <Navbar.Brand href="/" className="ps-4">Scuba Gear Picker</Navbar.Brand>
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/build">Start Build</Nav.Link>
                <Nav.Link href="">View Gear</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header