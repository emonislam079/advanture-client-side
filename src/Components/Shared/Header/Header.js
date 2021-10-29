import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo/logo.jpg';
import useAuth from '../../../Hooks/useAuth'
import { Link } from 'react-router-dom';


const Header = () => {
    const{user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg" >
                <Container>
                <Navbar.Brand href="/home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '} Adventure
      </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/Tours">Tours</Nav.Link>
                        <Nav.Link as={HashLink} to="/">Somethings 1 </Nav.Link>
                        <Nav.Link as={HashLink} to="/About">About Us</Nav.Link>
                        <Nav.Link as={HashLink} to="/">Ssomethisn 2</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="dark">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                            <Navbar.Text>
                            Signed in : <a href="/login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;