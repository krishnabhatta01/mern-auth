import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSignInAlt, FaSignOutAlt} from "react-icons/fa";
import {LinkContainer } from 'react-router-bootstrap';



const Header = () => {
  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Container>

        <LinkContainer to="/">
        <Navbar.Brand>Mern-Auth</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex">
        
            <LinkContainer to="/login">
              <Nav.Link>
                  Sign In<FaSignInAlt />
                  
              </Nav.Link>
            </LinkContainer>
           
            <LinkContainer to="/register">
            <Nav.Link>
                Sign Up <FaSignOutAlt/>
            </Nav.Link>
            </LinkContainer>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;