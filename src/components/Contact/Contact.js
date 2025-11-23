import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";
import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useFormValidation } from "../../hooks/useFormValidation";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    show: false,
    variant: "success",
    message: "",
  });

  const { errors, validateField, validateForm, resetErrors } = useFormValidation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      validateField(name, value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetErrors();

    if (!validateForm(formData)) {
      setSubmitStatus({
        show: true,
        variant: "danger",
        message: "Please fix the errors in the form.",
      });
      return;
    }

    try {
      
      setSubmitStatus({
        show: true,
        variant: "success",
        message: "Thank you for your message! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus({ show: false, variant: "", message: "" });
      }, 5000);
    } catch (error) {
      setSubmitStatus({
        show: true,
        variant: "danger",
        message: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={8}>
            <h1 className="project-heading">
              Get In <strong className="purple">Touch</strong>
            </h1>
            <p className="projectsub" style={{ textAlign: "center", paddingBottom: "30px" }}>
              Feel free to reach out if you have any questions or opportunities!
            </p>

            {submitStatus.show && (
              <Alert
                variant={submitStatus.variant}
                dismissible
                onClose={() => setSubmitStatus({ show: false, variant: "", message: "" })}
                className="mb-4"
              >
                {submitStatus.message}
              </Alert>
            )}

            <Row>
              <Col md={6} className="contact-info">
                <h3 style={{ paddingBottom: "20px" }}>Contact Information</h3>
                <div className="contact-item">
                  <AiFillMail className="contact-icon" />
                  <a href="mailto:avishkakavishan@gmail.com" className="contact-link">
                    avishkakavishan@gmail.com
                  </a>
                </div>
                <div className="contact-item">
                  <AiFillLinkedin className="contact-icon" />
                  <a
                    href="https://www.linkedin.com/in/avishka-kavishan-632476282"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="contact-item">
                  <AiFillGithub className="contact-icon" />
                  <a
                    href="https://github.com/Avishka-kavishan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    GitHub Profile
                  </a>
                </div>
              </Col>

              <Col md={6}>
                <Form onSubmit={handleSubmit} className="contact-form">
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      isInvalid={!!errors.message}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button variant="primary" type="submit" className="submit-btn">
                    Send Message
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;

