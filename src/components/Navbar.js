import { Container, Nav, Navbar, NavDropdown, Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar";

function NavbarComponent(props) {

    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/" className="brand">JMJ Electronics</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/" className ="navlink">Home</Nav.Link>
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/appliances" className="dropdownItem">Appliances</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/computers" className="dropdownItem">Computers</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/phones" className="dropdownItem">Phones</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/tvs" className="dropdownItem">TVs</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <SearchBar startSearch = {props.startSearch} />
          </Container>
          <Button>Cart</Button>
        </Navbar>
      );
}


export default NavbarComponent