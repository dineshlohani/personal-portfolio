import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.webp";
import myImg from "../Assets/avatar.webp";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillContacts,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="referrer" content="strict-origin-when-cross-origin"/>
        <meta
          name="description"
          content="Personal Portfolio of Dinesh Lohani - A passionate software developer."
        />
        <meta
          name="keywords"
          content="Dinesh Lohani, software developer, personal portfolio, web developer, React, JavaScript, Laravel"
        />
        <meta
          property="og:title"
          content="Dinesh Lohani - Personal Portfolio, Dinesh, Dinesh Lohani, Lohani"
        />
        <meta
          property="og:description"
          content="Explore the personal portfolio of Dinesh Lohani, a skilled software developer with expertise in React, JavaScript, and more."
        />
        <meta property="og:image" content={myImg} />
        <meta property="og:url" content="https://www.dineshlohani.com.np/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dinesh Lohani - Personal Portfolio"
        />
        <meta
          name="twitter:description"
          content="Explore the personal portfolio of Dinesh Lohani, a skilled software developer with expertise in React, JavaScript, and more."
        />

        <title>Dinesh Lohani - Personal Portfolio</title>
      </Helmet>

      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/project"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/resume"
                  onClick={() => updateExpanded(false)}
                >
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  onClick={() => updateExpanded(false)}
                >
                  <AiFillContacts  
                    style={{ marginBottom: "2px" }}
                  />
                  Contact
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/blog"
                  onClick={() => updateExpanded(false)}
                >
                  <ImBlog
                    style={{ marginBottom: "2px" }}
                  />
                  Blogs
                </Nav.Link>
              </Nav.Item>


              <Nav.Item className="fork-btn">
                <Button
                  href="https://github.com/dineshlohani/personal-portfolio.git"
                  target="_blank"
                  className="fork-btn-inner"
                  aria-label="View the GitHub repository of this portfolio"
                >
                  <CgGitFork style={{ fontSize: "1.2em" }} />
                  <AiFillStar style={{ fontSize: "1.1em" }} />
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
