import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
  AiFillMessage,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="contact-card">
              <h2 className="mb-4 ">Contact Me</h2>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Type your message here..."
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            </div>
            <ul className="home-about-social-links">
                          <li className="social-icons">
                            <a
                              href="https://github.com/Avishka-kavishan"
                              target="_blank"
                              rel="noreferrer"
                              className="icon-colour  home-social-icons"
                            >
                              <AiFillGithub />
                            </a>
                          </li>
                          <li className="social-icons">
                            <a
                              href="0778971323"
                              target="_blank"
                              rel="noreferrer"
                              className="icon-colour  home-social-icons"
                            >
                              <FaWhatsapp/>
                            </a>
                          </li>
                          <li className="social-icons">
                            <a
                              href="https://www.linkedin.com/in/avishka-kavishan-632476282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                              target="_blank"
                              rel="noreferrer"
                              className="icon-colour  home-social-icons"
                            >
                              <FaLinkedinIn />
                            </a>
                          </li>
                          <li className="social-icons">
                            <a
                              href="https://www.facebook.com/share/17Umd2xdhz/"
                              target="_blank"
                              rel="noreferrer"
                              className="icon-colour home-social-icons"
                            >
                              <AiFillFacebook />
                            </a>
                          </li>
                        </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
