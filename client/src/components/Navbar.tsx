import { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";

import checkLoginStatus from "../requests/authentication/status";
import "./Navbar.css";

function CustomNavbar() {
  const [loggedIn, setLoggedIn] = useState<boolean>(checkLoginStatus());

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("username");
    setLoggedIn(false);
  };

  function getUserComponent() {
    if (loggedIn) {
      // User is logged in
      return (
        <Nav className="mx-4 mb-4 mb-lg-0">
          <Nav.Link href="/" className="mx-1 my-1 my-lg-0 btn-login">
            Tuyaux
          </Nav.Link>
          <NavDropdown
            title=<>
              <Person className="me-1 icon-person" />
              {localStorage.getItem("username")}
            </>
            id="basic-nav-dropdown"
            className="mx-1 my-1 my-lg-0"
          >
            <NavDropdown.Item href="/account">Account</NavDropdown.Item>
            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      );
    } else {
      // User is not logged in
      return (
        <Nav className="mx-4 mb-4 mb-lg-0">
          <Nav.Link href="/login" className="mx-1 my-1 my-lg-0 btn-login">
            login
          </Nav.Link>
          <Nav.Link href="/register" className="mx-1 my-1 my-lg-0 btn-register">
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
        {getUserComponent()}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
