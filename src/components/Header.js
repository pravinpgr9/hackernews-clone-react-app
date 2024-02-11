import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ width: "100%" }}>
            <NavLink to="/top" className="nav-link">
              Top Stories
            </NavLink>
            <NavLink to="/new" className="nav-link">
              Latest Stories
            </NavLink>
            <NavLink to="/best" className="nav-link">
              Best Stories
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
