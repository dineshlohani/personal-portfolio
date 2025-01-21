import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kapada from "../../Assets/Projects/kapada.png";
import sifaris from "../../Assets/Projects/sifaris.png";
import bibaabo from "../../Assets/Projects/bibaabo.png";
import diabetes from "../../Assets/Projects/diabetes.png";
import library from "../../Assets/Projects/library.png";
import shinjiru from "../../Assets/Projects/Shinjiru.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diabetes}
              isBlog={false}
              title="Diabetes Prediction System"
              description=" Developed a Diabetes Prediction System using Python and NumPy with Logistic and Linear Regression models. The system analyzes health parameters like glucose levels, BMI, and insulin to ensure accurate, cost-free, and accessible predictions. It aims to improve early diabetes detection, management, 
              and public health awareness, addressing challenges in resource-limited settings."
              ghLink="https://github.com/dineshlohani/Diabetes-prediction-Logistic-regression"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sifaris}
              isBlog={false}
              title="E-sifaris"
              description="E-Sifaris is a software used by the local government of Nepal for registration and dispatch purposes. It is used to create recommendations (sifaris) for various incidents, 
              such as verifications, registrations, relationships, and other documents required for our daily government work."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bibaabo}
              isBlog={false}
              title="Bibaabo"
              description="BIBAABO, short for BIMA BANK AND BROKER, is a groundbreaking financial product reselling platform, unique as the sole marketplace offering a comprehensive range of financial products and services. Bibaabo revolutionizes the financial landscape by enabling customers to select, compare, and purchase the best-suited financial products based on various criteria such as product offerings, ratings, corporate governance, and financial benefits."
              ghLink="https://github.com/dineshlohani/Bibaabo"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={library}
              isBlog={false}
              title="Library Management System"
              description="The Library Management System is an efficient and user-friendly software designed to automate and simplify library operations. Developed using HTML, CSS, ASP.NET, and C#, it enables easy management
               of tasks such as adding members, managing books, tracking borrow/return transactions, and generating reports.
              With its intuitive interface, fast database access, and secure record handling, the system eliminates manual management challenges, making library operations seamless and hassle-free."
              ghLink="https://github.com/dineshlohani/library"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kapada}
              isBlog={false}
              title="Purano kapada"
              description="PuranoKapada is a React-based digital platform that transforms how old clothes are bought and sold. It connects sellers giving their pre-loved clothes a second life with buyers seeking affordable, sustainable options. The platform promotes circular fashion, reducing waste and encouraging eco-friendly choices. With secure transactions and user-friendly features, it ensures a 
              seamless experience. PuranoKapada makes sustainable fashion easy, accessible, and impactful.
"
              ghLink="https://github.com/dineshlohani/Purano-kapada-react"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shinjiru}
              isBlog={false}
              title="Consultancy Websites"
              description="The Shinjiru Educational Consultancy website is a Laravel-based platform designed to assist 
              students and professionals aiming to study and work in Japan. It offers services like admissions assistance, test preparation, and interview coaching. The site features a user-friendly interface with detailed information and an efficient inquiry system. Built for security and scalability, it ensures a seamless user experience. This platform 
              connects aspirations with opportunities, making dreams a reality.

"
              ghLink="#"
              demoLink="https://www.shinjirueducational.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
