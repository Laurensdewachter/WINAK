import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import CustomNavbar from "../components/Navbar.tsx";
import register from "../requests/authentication/register.ts";
import "./Register.css";

function RegisterPage() {
  const [isWide, setIsWide] = useState<boolean>(window.innerWidth > 1175);
  useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth > 1175);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const [currentStage, setCurrentStage] = useState<number>(1);
  const [validated, setValidated] = useState<boolean>(false);

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [study, setStudy] = useState<string>("Wiskunde");

  // Used to store the current stage as a query parameter
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentStage = Number(queryParams.get("stage")) || 1;
  // Update the query parameter when the stage changes
  const handleStageChange = (stage: number) => {
    queryParams.set("stage", stage.toString());
    navigate({ search: queryParams.toString() });
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Check validity of the form
    const form = event.currentTarget;
    setValidated(true);
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (currentStage !== 3) {
      // Go to the next stage
      handleStageChange(currentStage + 1);
      setValidated(false);
      event.preventDefault();
      return;
    } else {
      // Submit the form to the server
      register(username, email, password, firstName, lastName, study)
        .then(() => {
          navigate("");
        })
        .catch((error) => {
          navigate("/register?stage=1");
          console.error(error);
        });
    }
  };

  // The custom page tracking icons
  const PageIcon = (number: number, active: boolean) => {
    if (active) {
      return (
        <Container className="p-0 m-0 circle-active">
          <Container className="page-number">{number}</Container>
        </Container>
      );
    } else {
      return (
        <Container className="p-0 m-0 circle-inactive">
          <Container className="page-number">{number}</Container>
        </Container>
      );
    }
  };

  const renderStep = () => {
    switch (currentStage) {
      case 1:
        return (
          <Container fluid className="p-0 m-0">
            <Row className="p-0 m-0">
              {/* Image */}
              {isWide && (
                <Col className="p-0 m-0">
                  <img src="/images/placeholder.jpg" className="img-custom" />
                </Col>
              )}
              <Col className="p-0 m-0">
                <Container className="form-container">
                  {/* Register text */}
                  <Container className="title-container p-0 m-0">
                    Registratie
                  </Container>
                  {/* Page numbers */}
                  <Container fluid>
                    <Row xs="auto" className="py-3">
                      <Col className="ps-0 pe-3">{PageIcon(1, true)}</Col>
                      <Col className="ps-0 pe-3">{PageIcon(2, false)}</Col>
                      <Col className="p-0">{PageIcon(3, false)}</Col>
                    </Row>
                  </Container>

                  {/* Form */}
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                    key={currentStage}
                  >
                    {/* Username */}
                    <Form.Group className="mb-4">
                      <Form.Label>Gebruikersnaam</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="username"
                        defaultValue={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Vul een gebruikersnaam in.
                      </Form.Control.Feedback>
                    </Form.Group>
                    {/* Email */}
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        name="email"
                        defaultValue={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Vul een geldige email in.
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Next button */}
                    <Container className="px-0 pt-4 m-0">
                      <Button type="submit" className="submit-button">
                        Volgende
                      </Button>
                    </Container>
                  </Form>
                </Container>
              </Col>
            </Row>
          </Container>
        );

      case 2:
        return (
          <Container fluid className="p-0 m-0">
            <Row className="p-0 m-0">
              {/* Image */}
              {isWide && (
                <Col className="p-0 m-0">
                  <img src="/images/placeholder.jpg" className="img-custom" />
                </Col>
              )}
              <Col className="p-0 m-0">
                <Container className="form-container">
                  {/* Register text */}
                  <Container className="title-container p-0 m-0">
                    Registratie
                  </Container>
                  {/* Page numbers */}
                  <Container fluid>
                    <Row xs="auto" className="py-3">
                      <Col className="ps-0 pe-3">{PageIcon(1, false)}</Col>
                      <Col className="ps-0 pe-3">{PageIcon(2, true)}</Col>
                      <Col className="p-0">{PageIcon(3, false)}</Col>
                    </Row>
                  </Container>

                  {/* Form */}
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                    key={currentStage}
                  >
                    {/* First name */}
                    <Form.Group className="mb-4">
                      <Form.Label>Voornaam</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="firstName"
                        defaultValue={firstName}
                        autoComplete="true"
                        autoCapitalize="True"
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Vul je voornaam in.
                      </Form.Control.Feedback>
                    </Form.Group>
                    {/* Last name */}
                    <Form.Group className="mb-4">
                      <Form.Label>Achternaam</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="lastName"
                        defaultValue={lastName}
                        autoComplete="true"
                        autoCapitalize="true"
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Vul je achternaam in.
                      </Form.Control.Feedback>
                    </Form.Group>
                    {/* Study */}
                    <Form.Group>
                      <Form.Label>Richting</Form.Label>
                      <Form.Select
                        name="study"
                        defaultValue={study}
                        onChange={(e) => {
                          setStudy(e.target.value);
                        }}
                      >
                        <option>Wiskunde</option>
                        <option>Informatica</option>
                        <option>Fysica</option>
                        <option>Andere</option>
                      </Form.Select>
                    </Form.Group>

                    {/* Next button */}
                    <Container className="px-0 pt-4 m-0">
                      <Button
                        className="prev-button me-4"
                        onClick={(e) => {
                          handleStageChange(currentStage - 1);
                        }}
                      >
                        Terug
                      </Button>
                      <Button type="submit" className="submit-button">
                        Volgende
                      </Button>
                    </Container>
                  </Form>
                </Container>
              </Col>
            </Row>
          </Container>
        );
      case 3:
        return (
          <Container fluid className="p-0 m-0">
            <Row className="p-0 m-0">
              {/* Image */}
              {isWide && (
                <Col className="p-0 m-0">
                  <img src="/images/placeholder.jpg" className="img-custom" />
                </Col>
              )}
              <Col className="p-0 m-0">
                <Container className="form-container">
                  {/* Register text */}
                  <Container className="title-container p-0 m-0">
                    Registratie
                  </Container>
                  {/* Page numbers */}
                  <Container fluid>
                    <Row xs="auto" className="py-3">
                      <Col className="ps-0 pe-3">{PageIcon(1, false)}</Col>
                      <Col className="ps-0 pe-3">{PageIcon(2, false)}</Col>
                      <Col className="p-0">{PageIcon(3, true)}</Col>
                    </Row>
                  </Container>

                  {/* Form */}
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                    key={currentStage}
                  >
                    {/* Username */}
                    <Form.Group className="mb-4">
                      <Form.Label>Wachtwoord</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        name="password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Vul een wachtwoord in.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                      <Form.Check label="Ik ga akkoord met de algemene voorwaarden." />
                    </Form.Group>

                    {/* Next button */}
                    <Container className="px-0 pt-4 m-0">
                      <Button
                        className="prev-button me-4"
                        onClick={(e) => {
                          handleStageChange(currentStage - 1);
                        }}
                      >
                        Terug
                      </Button>
                      <Button type="submit" className="submit-button">
                        Registreer
                      </Button>
                    </Container>
                  </Form>
                </Container>
              </Col>
            </Row>
          </Container>
        );
    }
  };

  return (
    <>
      <CustomNavbar />
      {renderStep()}
    </>
  );
}

export default RegisterPage;
