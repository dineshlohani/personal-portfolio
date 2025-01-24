import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          Designed and Developed by Dinesh Lohani
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} D͜͡ʟ</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/dineshlohani"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/dinesh.lohani.969"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="follow on facebook"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/dineshlohani20"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="connect on Twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/dinesh-lohani-2f7og62i/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="connect on linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/dinesh.lohani4/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="follow me on instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
