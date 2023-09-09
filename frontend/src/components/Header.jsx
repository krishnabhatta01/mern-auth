import {Nav, Navbar,Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt} from "react-icons/fa";
import {LinkContainer } from 'react-router-bootstrap';
import {useSelector, useDispatch} from 'react-redux';



const Header = () => {
  const{userInfo}= useSelector((state) => state.auth);

   return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Container>

        <LinkContainer to="/">
        <Navbar.Brand>Mern-Auth</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex">

            {userInfo ? (
              <>
                  <NavDropdown
                    title={userInfo.name}
                    id="username"
                  >
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>
                        Profile
                      </NavDropdown.Item>
                    </LinkContainer>
                    
                    <NavDropdown.Divider />

                   
                      <NavDropdown.Item>
                        Logout
                      </NavDropdown.Item>
                  

                  </NavDropdown>

              </>
            ) : (
              <>
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
              </>
            )}
        
           
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;