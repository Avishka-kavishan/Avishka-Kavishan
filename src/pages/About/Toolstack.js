import React from "react";
import { Col, Row } from "react-bootstrap";
import { FiFigma } from "react-icons/fi";
import { SiAdobexd } from "react-icons/si";
import { SiCanva, SiFramer } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FiFigma className="tech-icon-images" />
        <div className="tech-icons-text">Figma</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiAdobexd className="tech-icon-images" />
        <div className="tech-icons-text">Adobe XD</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiCanva className="tech-icon-images" />
        <div className="tech-icons-text">Canva</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <SiFramer className="tech-icon-images" />
        <div className="tech-icons-text">Framer</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
