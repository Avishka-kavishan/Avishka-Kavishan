import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import { AiFillHome } from "react-icons/ai";

function NotFound() {
  return (
    <Container fluid className="notfound-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
          <Col md={8} className="text-center">
            <div className="notfound-content">
              <h1 className="notfound-title">404</h1>
              <h2 className="notfound-subtitle">Page Not Found</h2>
              <p className="notfound-description">
                Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
              </p>
              <Link to="/">
                <Button variant="primary" size="lg" className="notfound-button">
                  <AiFillHome /> &nbsp; Back to Home
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default NotFound;

