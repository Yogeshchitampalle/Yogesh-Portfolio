import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ConnectMeForm from "./ConnectMeForm";
import Particle from "../Particle";

function Connect() {
  return (
    <Container fluid className="connect-section">
      <Particle />
      <Container>
        <h1 className="connect-heading">
          Connect with Me<strong className="purple"> </strong>
        </h1>
        <p style={{ color: "white" }}>
          Feel free to get in touch with me through the form below.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={8} className="connect-form">
            <ConnectMeForm />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Connect;
