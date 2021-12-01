import './Navigation.css';
import React, { useReducer, useState, useEffect } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer, Form, FormControl, Button } from 'react-router-bootstrap';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { BrowserRouter, Link} from 'react-router-dom';
const cookies = new Cookies();
//reference: https://www.youtube.com/watch?v=VlklL6TPlpw

function Navigation() {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    const token = cookies.get("access_token")
    
    const authAxios = axios.create({
        baseURL: "http://143.198.25.164:5000",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    useEffect(() => {
        protect()
    }, [])
    const protect = async () => {
        try {
            const userProfile = await authAxios.get("/api/auth/user/info")

            //console.log(setToken(Cookies.get("access_token")))
            setUser([userProfile.data])
            setLoading(true)

        } catch (error) {
            console.log(error.message)
        }
    }

    const logout = () => {
        var token = cookies.get("access_token")
        cookies.remove("access_token", token, { path: '/' })
        //localCookies.clear();
        window.location.href = '/';
      }

    return (
        <Navbar collapseOnSelect bg="dark" expand="md" className="mb-7" border="dark">
            <LinkContainer to="/">
                <Navbar.Brand className="font-weight-bold"><h1 className="colortext">Plate</h1></Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="justify-content-center">
            {
                cookies.get("access_token") ?
                <>
                <LinkContainer to="/meals" >
                    <Nav.Link><h3 className="colortext">Meals</h3></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/restaurants" >
                    <Nav.Link><h3 className="colortext">Restaurants</h3></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/">
                    <Nav.Link onClick={logout}><h3 className="colortext">Logout</h3></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/profile">
                    <Nav.Link>
                    {loading && user.map((item) => (
                    <h3 className="colortext"> { item.user.username }</h3>
                    ))}
                    </Nav.Link>
                </LinkContainer>
                </>
                :
                <>
                <LinkContainer to="/login" >
                    <Nav.Link><h3 className="colortext">Login</h3></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/meals" >
                    <Nav.Link><h3 className="colortext">Meals</h3></Nav.Link>
                </LinkContainer>
                </>
            }
            
           
            
            
            {/* <LinkContainer to="/reviews" >
                <Nav.Link><h3 className="colortext">Reviews</h3></Nav.Link>
            </LinkContainer> */}
            
            {/* <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            </Form> */}
            
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;