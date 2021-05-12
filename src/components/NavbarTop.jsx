import { Navbar, Nav } from "react-bootstrap";
import {useAuth} from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

const NavbarTop = () => {
  const {logout} = useAuth()
  const history = useHistory()

 const handleLogout = (e) => {
   e.preventDefault()
   logout()
   history.push('/')
 }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand as={Link} to='/'>Online Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/new">Post new ad</Nav.Link>
          <Nav.Link as={Link} to="/my-ads">My ads</Nav.Link> 
          <Nav.Link as={Link} to="/category">Categories</Nav.Link> 
        </Nav>
        <Nav>
          <Nav.Link as={Link} to='/settings'>Settings</Nav.Link>
          <Nav.Link eventKey={2} onClick={handleLogout}>
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarTop;
