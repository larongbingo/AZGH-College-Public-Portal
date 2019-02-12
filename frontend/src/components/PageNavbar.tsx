import React, { Component } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";

import schoolLogo from "./school-logo.png";

export class PageNavbar extends Component {
  public render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image 
              src={schoolLogo} 
              width="30px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {
            // @ts-ignore
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/courses">Courses</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          }
        </Container>
      </Navbar>
    );
  }
}

export default PageNavbar;
