import checkLoginStatus from "../requests/authentication/status";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Person } from "react-bootstrap-icons";
import "./Navbar.css";

function CustomNavbar() {
  const loggedIn = checkLoginStatus();

  function getUserComponents() {
    if (loggedIn) {
      // User is logged in
      return (
        <Nav className="ms-4 me-4 mb-4 me-lg-1 mb-lg-0">
          <Nav.Link href="/" className="me-3 mb-1 btn-login">
            Tuyaux
          </Nav.Link>
          <Nav.Link href="/account" className="me-3 btn-account">
          <Person className="me-1 icon-person"/>Mijn Account
          </Nav.Link>
        </Nav>
      );
    } else {
      // User is not logged in
      return (
        <Nav className="me-1 mb-4 mb-lg-0">
          <Nav.Link href="/login" className="me-3 mb-1 btn-login">
            login
          </Nav.Link>
          <Nav.Link href="/register" className="me-3 btn-register">
            Registreer
          </Nav.Link>
        </Nav>
      );
    }
  }

  return (
    <Navbar expand="lg" className="p-0">
      <Navbar.Brand href="/" className="m-0 me-4 py-3">
        <img alt="WINAK" src="/schild.svg" width="100" height="100" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-4" />
      <Navbar.Collapse>
        <Nav className="me-auto mb-3 mb-lg-0">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/over-ons">Over ons</Nav.Link>
          <Nav.Link href="/activiteiten">Activiteiten</Nav.Link>
          <Nav.Link href="/partnerships">Partnerships</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        {getUserComponents()}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
