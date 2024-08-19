import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import CustomNavbar from "../components/Navbar.tsx";
import register from "../requests/authentication/register.ts";

function RegisterPage() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(username, email, password, firstName, lastName);
  };

  return (
    <>
      <CustomNavbar />
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <InputGroup.Text>Username</InputGroup.Text>
          <Form.Control
            required
            placeholder="username"
            name="username"
            autoComplete="true"
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Voornaam</InputGroup.Text>
          <Form.Control
            required
            placeholder="voornaam"
            name="voornaam"
            autoComplete="true"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Achternaam</InputGroup.Text>
          <Form.Control
            required
            placeholder="achternaam"
            name="achternaam"
            autoComplete="true"
            onChange={(e) => setLastName(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Email</InputGroup.Text>
          <Form.Control
            required
            type="email"
            placeholder="email"
            name="email"
            autoComplete="true"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Password</InputGroup.Text>
          <Form.Control
            required
            type="password"
            placeholder="password"
            name="password"
            autoComplete="true"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default RegisterPage;
