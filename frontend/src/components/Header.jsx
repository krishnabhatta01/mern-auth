import {Nav, Navbar,Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt} from "react-icons/fa";
import {LinkContainer } from 'react-router-bootstrap';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import {logout} from '../slices/authSlice';


const Header = () => {
  const{userInfo}= useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (error ) {
      console.log(error);
    }
  }

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

                   
                      <NavDropdown.Item onClick={logoutHandler}>
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