import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dinesh Lohani </span>
            from <span className="purple"> Kathmandu, Nepal.</span>
            <br />
            I am currently employed as a software developer at Tinker.
            <br />
            I have completed Bachelor of Science in Computer Science and
            Information Technology (B.Sc. CSIT) in Tribhuvan University (TU)
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Volunteering or Teaching
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness & Outdoor Sports
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dinesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
