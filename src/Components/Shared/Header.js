import React from 'react';
import { Navbar,Container,Nav, Button } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Header = () => {
  // const { users, logOut } = UseFirebase();
  const { users, logOut } = UseAuth();
  console.log(users);
    return (
        <>
      <Navbar sticky="top" collapseOnSelect expand="lg"  bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>Food Delivery</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="ms-auto">      
      <Nav.Link as={Link} to="/home#home">Home</Nav.Link>                 
                {
                  users?.displayName &&
                  <Nav.Link as={Link} to="/addfood">Add Food</Nav.Link> 
               }
      <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
                {
                  users.displayName &&
                  <Nav.Link as={Link} to="/myorder">My Orders</Nav.Link>
               }
                {
                  users.displayName &&
                  <Nav.Link as={Link} to="/manageorder">Manage Orders</Nav.Link>
                }
                <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
              {
                users?.displayName ?
                <Button variant="success" onClick={logOut}>LogOut</Button> :
                  <Nav.Link as={Link} to="/login">Log In</Nav.Link>
              }         
              <img src={users.photoURL} style={{ width: "50px",borderRadius:"50px", paddingLeft:"5px"}} alt="" />
  </Navbar.Collapse>
  </Container>
</Navbar>
        
   </>
    );
};

export default Header;