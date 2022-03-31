import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
 

 export default function NavBar() {


    return (
        <>
        <Navbar bg="light" expand="lg">
         <div>
            <Navbar.Brand href="#home">Ferreteria Roberto</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Quienes Somos</Nav.Link>
                <Nav.Link href="#link">Contacto</Nav.Link>
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sanitarios</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Electricidad</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Pintureria</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Outlet</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
         </div>
        </Navbar>
        <h3>Ferreteria Roberto</h3>
        <CartWidget />
        </>
    );

}