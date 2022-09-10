import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Menu = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Tech Wordle</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        {/*
          <Nav.Link as={Link} to="/obrazky">Obrazky</Nav.Link>
          <Nav.Link as={Link} to="/video">Video</Nav.Link>
          <Nav.Link as={Link} to="/text">Text</Nav.Link>
        */}
        </Nav>
        <Nav>
          <Nav.Link href="/o-aplikacii">GitHub</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default React.memo(Menu);
