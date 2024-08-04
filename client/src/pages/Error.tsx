import { useRouteError } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import CustomNavbar from "../components/Navbar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <CustomNavbar />
      <Container>Unknown page</Container>
    </div>
  );
}
