import './Navigation.css';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useState, useEffect} from 'react'
import axios from 'axios';

function Navigation() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:5000/api/auth/login")
            .then((response) => {
                // setLoggedIn(response.data)
                // console.log(response.data)
            }).catch((error) => {
                console.log(error.message)
                setLoggedIn(false)
            })
    }, [])

    return (
        <Navbar collapseOnSelect bg="dark" expand="md" className="mb-7" border="dark">

            <LinkContainer to="/">
                <Navbar.Brand className="font-weight-bold"><h1 className="colortext">Plate</h1></Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="justify-content-center"> 

            <LinkContainer to="/login" >
                { !loggedIn && <Nav.Link><h3 className="colortext">Login</h3></Nav.Link> }
            </LinkContainer>

            <LinkContainer to="/meals" >
                <Nav.Link><h3 className="colortext">Meals</h3></Nav.Link>
            </LinkContainer>

            <LinkContainer to="/restaurants" >
                <Nav.Link><h3 className="colortext">Restaurants</h3></Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/reviews" >
                <Nav.Link><h3 className="colortext">Reviews</h3></Nav.Link>
            </LinkContainer> */}
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;