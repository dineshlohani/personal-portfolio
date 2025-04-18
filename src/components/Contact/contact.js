import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";
import contactImg from "../../Assets/contact.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setShowAlert(true);
      setFormData(prev => ({
        ...prev,
        message: "" // Clear only the message field, keep name for potential future use
      }));
      
      // Hide alert after 5 seconds
      setTimeout(() => setShowAlert(false), 5000);
    }, 1500);
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 style={{ fontSize: "2.1em", padding: "20px 0", textAlign: "center" }}>
          Get In <strong className="purple">Touch</strong>
        </h1>
        
        <Row style={{ justifyContent: "center", padding: "20px 0" }}>
          <Col md={6} style={{ paddingTop: "20px" }}>
            <Card className="blog-card-view">
              <Card.Body>
                <h3 style={{ paddingBottom: "20px" }}>
                  Contact Form
                </h3>
                
                {showAlert && (
                  <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    Thank you {formData.name} for your message! I'll get back to you soon.
                  </Alert>
                )}
                
                <Form onSubmit={handleSubmit}>
                  {/* Rest of the form remains the same */}
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      placeholder="Enter your name" 
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      placeholder="Enter your email" 
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required 
                      rows={5} 
                      placeholder="Your message here..." 
                    />
                  </Form.Group>

                  <Button 
                    variant="primary" 
                    type="submit" 
                    disabled={isSubmitting}
                    style={{ marginTop: "15px" }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="about-img" style={{ paddingTop: "100px" }}>
            <img 
              src={contactImg} 
              alt="Contact" 
              className="img-fluid" 
              style={{ borderRadius: "10px" }} 
            />
            
            <div style={{ padding: "30px 0" }}>
              <h4 className="purple">Other Ways to Connect</h4>
              <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                <li style={{ padding: "8px 0" }}>
                  <i className="fas fa-envelope" style={{ marginRight: "10px", color: "purple" }}></i>
                  <a href="mailto:dineshlohani333@gmail.com">E-Mail</a>
                </li>
                <li style={{ padding: "8px 0" }}>
                  <i className="fab fa-github" style={{ marginRight: "10px", color: "purple" }}></i>
                  <a href="https://github.com/dineshlohani" target="_blank" rel="noopener noreferrer">Github</a>
                </li>
                <li style={{ padding: "8px 0" }}>
                  <i className="fab fa-linkedin" style={{ marginRight: "10px", color: "purple" }}></i>
                  <a href="https://www.linkedin.com/in/dinesh-lohani-2f7og62i/" target="_blank" rel="noopener noreferrer">linkedin</a>
                </li>
                <li style={{ padding: "8px 0" }}>
                  <i className="fab fa-twitter" style={{ marginRight: "10px", color: "purple" }}></i>
                  <a href="https://x.com/dineshlohani20" target="_blank" rel="noopener noreferrer">Twitter</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;