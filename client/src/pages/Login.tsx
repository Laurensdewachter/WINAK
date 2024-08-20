import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import CustomNavbar from "../components/Navbar.tsx";
import login from "../requests/authentication/login.ts";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    login(username, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  }

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

export default LoginPage;
