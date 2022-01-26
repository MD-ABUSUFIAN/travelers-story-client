import React from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



const AdminHeader = () => {
    return (
        <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand className='fs-1'> ADMIN DASHBOARD</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
    <NavLink className="navLink" to="/allBlogs">All-Blogs</NavLink>
    <NavLink className="navLink" to="/manageBlogs">Manage-Blogs</NavLink>
    <NavLink className="navLink" to="/newBlog">New-Blogs</NavLink>
    
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
        </div>
    );
};

export default AdminHeader;