// React Components
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Button, Navbar, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import "public/fonts/FontAwesome/fontawesome";

// Page Content
import content from "public/content/en_US/Components/Layout/Nav/nav.content";

const JJNav = () => {
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="jj-nav sticky-top"
        >
          {/* Logo */}
          <Link href="/" passHref>
            <Navbar.Brand>
              <img
                src="/images/logos/jj-logo.webp"
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
                  <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/kids">J&amp;J Holistic Kids</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <NavDropdown title="About" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/about">
                      About J&amp;J
                    </NavDropdown.Item>
                    <NavDropdown.Divider className="d-none d-xl-block" />
                    <NavDropdown.Item href="/about/the-j-and-j-team">
                      The J&amp;J Team
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/about/testimonials">
                      Testimonials
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/gallery">Photo Gallery</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <NavDropdown
                    title="Services"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/services">
                      Services
                    </NavDropdown.Item>
                    <NavDropdown.Divider className="d-none d-xl-block" />
                    <NavDropdown.Item href="/services/high-frequency-endocrine-steam">
                      High Frequency Endocrine Steam
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                  <NavDropdown
                    title="Health Conditions"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/conditions">
                      Health Conditions
                    </NavDropdown.Item>
                    <NavDropdown.Divider className="d-none d-xl-block" />
                    <NavDropdown.Item href="/conditions/cardiovascular">
                      Cardiovascular
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/conditions/digestive-system">
                      Digestive System
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/conditions/immune-system">
                      Immune System
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/conditions/stress-and-adrenal-function">
                      Stress &amp; Adrenal Function
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/conditions/womens-health">
                      Women&apos;s Health
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="https://poporganics.net">Shop</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/forms">Forms</Nav.Link>
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

export default JJNav;
