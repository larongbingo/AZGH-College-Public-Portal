import React, { FunctionComponent } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import placeholder from "./placeholder.jpg";
import "./styles.css";

const AboveTheFold: FunctionComponent = () => (
  <div id="aboveFold">
    <Container>
      <Row>
        <Col id="above-fold-container">
          <Image src={placeholder} fluid/>
          <h1 id="school-name">AZGH College</h1>
        </Col>
      </Row>
    </Container>
  </div>
);

const Features: FunctionComponent = () => (
  <>
    <Row>
      <Col>
        <h2>Why choose AZGH College?</h2>
        <ul>
          <li>Proven track record</li>
          <li>Premiere source of highly trained staff</li>
          <li>Proven and effective training method</li>
          <li>Guaranteed and extensive industry valid curriculum</li>
          <li>Seasoned and Professional Faculty</li>
          <li>Internship/OJT Assistance</li>
          <li>Talent showcase opportunity</li>
          <li>Medical insurance at A. Zarate General Hospital</li>
        </ul>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>We offer: Senior Highschool Strands, 2 Year Diploma Courses, and Certificate Courses</h4>
      </Col>
    </Row>
  </>
);

const Announcements: FunctionComponent = () => (
  <>
    <h2>Announcements</h2>
    <Row>
      <Col>
        <h3>Web Portal is now up and running</h3>
        <p>Web Portal is now up and running</p>
      </Col>
      <Col>
        <h3>Web Portal is now up and running</h3>
        <p>Web Portal is now up and running</p>
      </Col>
      <Col>
        <h3>Web Portal is now up and running</h3>
        <p>Web Portal is now up and running</p>
      </Col>
    </Row>
  </>
);

export const index: FunctionComponent = () => (
  <>
    <AboveTheFold/>
    <Container>
      <Features/>
      <Announcements/>
    </Container>
  </>
);

export default index;
