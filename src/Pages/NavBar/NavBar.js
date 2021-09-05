import { Navbar, Nav } from "react-bootstrap";
import Logout from "../Auth/Logout/Logout";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="box-shadow navbar__wrapper"
    >
      <div className="container">
        <Nav className="me-auto">
          <Navbar.Brand className="logo">Evento</Navbar.Brand>
        </Nav>
        <Nav>
          <div className="user-avatar"></div>
          <Logout />
        </Nav>
      </div>
    </Navbar>
  );
};

export default NavBar;
