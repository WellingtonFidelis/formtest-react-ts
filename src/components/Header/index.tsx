import React from 'react'

import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">WFS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item as={Link} to="/list-character" className="nav-link">Consult</Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header;
