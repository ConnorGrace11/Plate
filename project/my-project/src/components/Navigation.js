import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
  return (
    <Navbar bg="warning" expand="lg" >
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <LinkContainer to="/">
        <Nav.Link><h2>Home</h2></Nav.Link>
      </LinkContainer>
      <LinkContainer to="/login">
        <Nav.Link><h2>Login</h2></Nav.Link>
      </LinkContainer>
      <LinkContainer to="/about">
        <Nav.Link><h2>About</h2></Nav.Link>
      </LinkContainer>
      <LinkContainer to="/photo">
        <Nav.Link><h2>Photos</h2></Nav.Link>
      </LinkContainer>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;