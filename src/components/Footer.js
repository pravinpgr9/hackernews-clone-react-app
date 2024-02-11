import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Container>
        <Row>
          <Col md={8}>
            <a className="footer-link">© 2024 Hacker News Clone</a>
          </Col>
          <Col md={2}>
            <a href="contact.html" className="footer-link">Contact</a>
          </Col>
          <Col md={2}>
            <a href="about.html" className="footer-link">About</a>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Footer;
