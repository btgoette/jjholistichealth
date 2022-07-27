// React Components
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Button, Navbar, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import "public/fonts/FontAwesome/fontawesome";

// Page Content
import content from "public/content/en_US/Components/Layout/Nav/nav.content";

const JJKidsNav = () => {
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          bg="dark"
          expand={expand}
          className="jj-kids-nav sticky-top"
        >
          {/* Logo */}
          <Link href="/kids" passHref>
            <Navbar.Brand>
              <img
                src="/images/logos/jj-kids-logo.webp"
                alt="J&amp;J Holistic Nutritional Therapy"
                className="logo ms-lg-0 ms-2"
              />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end pe-3">
                <Nav.Item className="d-block d-xl-none">
                  <Nav.Link href="/kids">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/">J&amp;J Holistic Adults</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <NavDropdown title="About" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/kids/about">
                      About J&amp;J Kids
                    </NavDropdown.Item>
                    <NavDropdown.Divider className="d-none d-xl-block" />
                    <NavDropdown.Item href="/kids/about/the-j-and-j-team">
                      The J&amp;J Team
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item href="/kids/about/testimonials">
                      Testimonials
                    </NavDropdown.Item> */}
                  </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/kids/gallery">Photo Gallery</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <NavDropdown title="Services" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/kids/services">
                      Services
                    </NavDropdown.Item>
                    <NavDropdown.Divider className="d-none d-xl-block" />
                    <NavDropdown.Item href="/kids/services#free-15-minute-consultation">
                      15 Minute Consultation
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/kids/services#initial-interview">
                      Pediatric Initial Interviews
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/kids/services#child-assessment">
                      Pediatric Full Functional Evaluation
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/kids/services#food-intolerance-and-sensitivity-test">
                      Food Intolerance/Sensitivity Test
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/kids/services#personalized-meal-planning">
                      Personalized Meal Menu Planning
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item href="/kids/services#sick-visits">
                      Sick Visits
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/kids/services#aromatherapy">
                      Aromatherapy
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/kids/services#foot-detox">
                      Foot Detox
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/kids/services#facials">
                      Facials
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/kids/services#cupping">
                      Cupping
                    </NavDropdown.Item> */}
                  </NavDropdown>
                </Nav.Item>
                {/* <Nav.Item>
                  <NavDropdown title="Resources" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">
                      Common Pediatric Ailments
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Stress Management
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Back To School
                    </NavDropdown.Item>
              
                  </NavDropdown>
                </Nav.Item> */}
                <Nav.Item>
                  <Nav.Link href="/forms">Forms</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="https://poporganics.net">Shop</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-block d-xl-none">
                  <Nav.Link href="/forms/book-now">Book Now</Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-none d-xl-block">
                  <Button className="">
                    <Nav.Link href="/forms/book-now">Book Now</Nav.Link>
                  </Button>
                </Nav.Item>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      ))}
    </>
  );
};

export default JJKidsNav;
