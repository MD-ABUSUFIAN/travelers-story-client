import React from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
    {<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">TRAVELERS STORY</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
    <NavLink to="/home">Home</NavLink>
    <NavLink to="/addExpreience">Add-Travel-Exprience</NavLink>
    <NavLink to="contact">Contact</NavLink>
    <NavLink  to="/login">
    Login
    </NavLink>
    <NavLink  to="/admin">
    Admin
    </NavLink>
    <Button  >
    LogOut
    </Button>
    
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>}
        </div>
    );
};

export default Header;