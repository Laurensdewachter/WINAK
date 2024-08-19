import checkLoginStatus from "../requests/authentication/status";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function CustomNavbar() {
  const loginStatus = checkLoginStatus();
  return (
    <Navbar expand="lg" className="p-0">
      <Navbar.Brand href="/" className="m-0 me-4 py-3">
        <img alt="WINAK" src="/schild.svg" width="100" height="100" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-4" />
      <Navbar.Collapse className="ms-4">
        <Nav className="me-auto mb-3 mb-lg-0">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/over-ons">Over ons</Nav.Link>
          <Nav.Link href="/activiteiten">Activiteiten</Nav.Link>
          <Nav.Link href="/partnerships">Partnerships</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Nav className="me-1 mb-4 mb-lg-0">
          <Nav.Link href="/login" className="me-3 mb-1 btn-login">
            Login
          </Nav.Link>
          <Nav.Link href="/register" className="me-3 btn-register">
            Registreer
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
