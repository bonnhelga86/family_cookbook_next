import { Container, Navbar, NavbarCollapse, NavbarText } from "react-bootstrap";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarCollapse className="justify-content-center">
            <NavbarText>Copyright &copy; 2025</NavbarText>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </footer>
  );
};
