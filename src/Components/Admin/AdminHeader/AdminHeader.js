import React from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const AdminHeader = () => {
    const {logOut}=useAuth();

    return (
        <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand className='fs-1'> ADMIN DASHBOARD</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
    <NavLink className="navLink" to="/admin/allBlogs">All-Blogs</NavLink>
    <NavLink className="navLink" to="/admin/manageBlogs">Manage-Blogs</NavLink>
    <NavLink className="navLink" to="/admin/newBlog">New-Blogs</NavLink>
     <Link to="/"><Button onClick={logOut} className='btn-danger navLink border-0 fw-bolder'>
            LogOut
    </Button></Link>
    
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
        </div>
    );
};

export default AdminHeader;