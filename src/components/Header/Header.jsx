import './Header.scss';
import { NavLink as LinkRout } from 'react-router-dom';
import { Navbar, Button, Nav, Container } from 'react-bootstrap';
import './Header.scss';

const Header = ({ total }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>EasySell</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkRout className="nav-link" to="/">
              Home
            </LinkRout>
            <LinkRout className="nav-link" to="shoes">
              Shoes
            </LinkRout>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Button variant="outline-info">
            <LinkRout className="nav-link__basket" to="/my-shoes">
              Ваш кошик <br /> {total} грн
            </LinkRout>
          </Button>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default Header;
