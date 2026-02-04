import React, { useRef, useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";
import contactImg from "../../Assets/contact.jpg";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email validation regex
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message
    };

    emailjs.send(
      "service_jxzx4gs",
      "template_y631q63",
      templateParams,
      "xDyd3IjkbXGdmsYq7"
    )
    .then((response) => {
      console.log("Email sent successfully!", response.status, response.text);
      setAlertVariant("success");
      setAlertMessage(`Thank you ${formData.name} for your message! I'll get back to you soon.`);
      setShowAlert(true);
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
      setAlertVariant("danger");
      setAlertMessage("Oops! Something went wrong. Please try again later.");
      setShowAlert(true);
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setShowAlert(false), 5000);
    });
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
                  <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                    {alertMessage}
                  </Alert>
                )}
                
                <Form ref={form} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                      placeholder="Enter your name" 
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                      placeholder="Enter your email" 
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      isInvalid={!!errors.message}
                      rows={5} 
                      placeholder="Your message here..." 
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
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