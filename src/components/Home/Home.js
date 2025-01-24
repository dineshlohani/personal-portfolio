import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogoWebp from "../../Assets/home-main.webp"; // Optimized WebP format
import homeLogoFallback from "../../Assets/home-main.svg"; // Fallback SVG format
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> DINESH LOHANI</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* Optimized Image Section */}
            <Col md={5} style={{ paddingBottom: 20 }}>
              <picture>
                <source srcSet={homeLogoWebp} type="image/webp" />
                <img
                  src={homeLogoFallback}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                  loading="lazy" // Enable lazy loading
                />
              </picture>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
