import React from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user,logOut}=useAuth();
    return (
        <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand className='fs-1'>TRAVELERS STORY</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
    <NavLink className="navLink" to="/home">Home</NavLink>
    <NavLink className="navLink" to="/addExpreience">Add-Travel-Exprience</NavLink>
    <NavLink className="navLink" to="/contact">Contact</NavLink>
    
        {
            user?.email ? <div> <Button onClick={logOut} className='btn-danger navLink border-0 fw-bolder'>
            LogOut
            </Button>
                <NavLink  to="/admin">
                <Button className='navLink border-0'>
                Admin
                </Button>
            </NavLink>
            </div> :
            <NavLink className="navLink" to="/login">
           Login
          </NavLink>
        }
 
   
    
    
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
        </div>
    );
};

export default Header;