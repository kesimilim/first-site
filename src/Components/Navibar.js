import React, { useState } from 'react';
import {
  Nav,
  Navbar,
  Button,
  Form,
  Modal,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
`;

export function NaviBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>Welcome</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/">Users</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/">About</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Button variant="primary" className="mr-2" onClick={handleShow}>
                Log in
              </Button>
              <Button variant="primary" onClick={handleShow}>
                Sign out
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="fromBasicEmail">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="fromBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Form.Group controlId="fromBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}