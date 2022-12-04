
import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap"
import { Routes, Route, Link } from "react-router-dom"

function NavbarComponent() {

    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/" >JMJ Electronics</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/appliances">Appliances</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/computers">Computers</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/phones">Phones</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/tvs">TVs</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}


export default NavbarComponent