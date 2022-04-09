import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  DropdownButton,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
// import logo from "../assets/images/logoFares.jpeg";
import logo from "../assets/images/fares-bgBlack.jpeg";

const navBar = () => {
  return (
    <Navbar bg="success" expand="lg" variant="dark">
      <Container>
        <nav>
          <a href="#">
            <img
              src={logo}
              width="50"
              height="50"
              alt=""
              class="rounded-circle"
            />
          </a>
        </nav>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          class="d-flex justify-content-end"
        >
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
            <Nav.Link href="#nosotros"> Nosotros</Nav.Link>
          </Nav>
          <Nav bg="dark">
            <NavDropdown title="My Account" id="collasible-nav-dropdown ">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Set Theme</NavDropdown.Item>
              {/* <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">LogOut</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navBar;
