import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Icon from  "./Icon" ;
import CartWidget from "./CartWidget";
 

 export default function NavBar() {

    


    return (
        <>
        <Navbar  bg="light" expand="lg"> 
        <Container>
            <Navbar.Brand href="#home">FERRETERIA ROBERTO</Navbar.Brand>
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
                <NavDropdown.Item href="#action/3.4">Ubicacion</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link"><Icon cant={20} /></Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <CartWidget />
        </Container>
        </Navbar>  
        
        <h3>Donde encontraras el cosito del cosito</h3>
       
        </>
    );

}