// React Components
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Link from 'next/link'
import { Container, Button, Navbar, Nav, NavDropdown, Offcanvas, CloseButton } from 'react-bootstrap'
import 'public/fonts/FontAwesome/fontawesome'

// Page Content
import content from 'public/content/en_US/Components/Layout/Nav/nav.content'

export default function CustomNav() {

  return (

    <div className="sticky-top" aria-label="J&amp;J Navbar">
      <Navbar collapseOnSelect bg="light" expand="xl" className={content.nav.background}>
        <Container className="py-0 px-1">
          <div className="d-flex align-items-center">
            <Link href={content.nav.brand.jjLogo.link} passHref>
              <Navbar.Brand>
                <LazyLoadImage
                  src={content.nav.brand.jjLogo.image.src}
                  alt={content.nav.brand.jjLogo.image.alt}
                  className="logo ms-lg-0 ms-2"
                />
              </Navbar.Brand>
            </Link>
            <Link href={content.nav.brand.jjKidsLogo.link} passHref>
              <Navbar.Brand className="d-none d-sm-flex" >
                <LazyLoadImage
                  src={content.nav.brand.jjKidsLogo.image.src}
                  alt={content.nav.brand.jjKidsLogo.image.alt}
                  className="logo"
                />
              </Navbar.Brand>
            </Link>
          </div>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">

                <Nav.Item>
                  <Link href={content.nav.navbar.home.link} passHref>
                    <Nav.Link >
                      {content.nav.navbar.home.li}
                    </Nav.Link>
                  </Link>
                </Nav.Item>

                <Nav.Item>
                  <Link href={content.nav.navbar.kids.link} passHref>
                    <Nav.Link >
                      {content.nav.navbar.kids.li}
                    </Nav.Link>
                  </Link>
                </Nav.Item>

                <NavDropdown title="About" id="about-dropdown">
                  {content.nav.navbar.about.map(({ li, link }, i) => (
                    <Link key={i} href={link} passHref>
                      <NavDropdown.Item>
                        {li}
                      </NavDropdown.Item>
                    </Link>
                  ))}
                </NavDropdown>

                <Nav.Item>
                  <Link href={content.nav.navbar.services.link} passHref>
                    <Nav.Link>
                      {content.nav.navbar.services.li}
                    </Nav.Link>
                  </Link>
                </Nav.Item>

                <NavDropdown title="Health Conditions" id="conditions-dropdown">
                  {content.nav.navbar.conditions.map(({ li, link }, i) => (
                    <Link key={i} href={link} passHref>
                      <NavDropdown.Item>
                        {li}
                      </NavDropdown.Item>
                    </Link>
                  ))}
                </NavDropdown>

                <Nav.Item>
                  <Nav.Link href={content.nav.navbar.shop.link} target="blank">
                    {content.nav.navbar.shop.li}
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Link href={content.nav.navbar.blog.link} passHref>
                    <Nav.Link title={content.nav.navbar.blog.li}>
                      {content.nav.navbar.blog.li}
                    </Nav.Link>
                  </Link>
                </Nav.Item>

                <Nav.Item>
                  <Link href={content.nav.navbar.forms.link} passHref>
                    <Nav.Link>
                      {content.nav.navbar.forms.li}
                    </Nav.Link>
                  </Link>
                </Nav.Item>

                {/* <NavDropdown title="Promos" id="promos">
                  <NavDropdown.Divider />
                  {content.nav.navbar.promos.map(({ li, link }, i) => (
                    <Link key={i} href={link} passHref>
                      <NavDropdown.Item>
                        {li}
                      </NavDropdown.Item>
                    </Link>
                  ))}
                </NavDropdown> */}

                <Nav.Item>
                  <Link href={content.nav.navbar.bookNow.link} target="blank" passHref>
                    <Nav.Link>
                      {content.nav.navbar.bookNow.li}
                    </Nav.Link>
                  </Link>
                </Nav.Item>

              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Collapse className="d-none d-xl-flex" id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item className="d-flex d-xl-none">
                <Link href={content.nav.navbar.kids.link} passHref>
                  <Nav.Link passHref>
                    {content.nav.navbar.kids.li}
                  </Nav.Link>
                </Link>
              </Nav.Item>
              <NavDropdown title="About" id="about-dropdown">
                <Link href={content.nav.navbar.about[0].link} passHref>
                  <NavDropdown.Item>
                    {content.nav.navbar.about[0].li}
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                {content.nav.navbar.about.slice(1).map(({ li, link }, i) => (
                  <Link key={i} href={link} passHref>
                    <NavDropdown.Item>
                      {li}
                    </NavDropdown.Item>
                  </Link>
                ))}
              </NavDropdown>
              <Nav.Item>
                <Link href={content.nav.navbar.services.link} passHref>
                  <Nav.Link>
                    {content.nav.navbar.services.li}
                  </Nav.Link>
                </Link>
              </Nav.Item>
              <NavDropdown title="Health Conditions" id="conditions-dropdown">
                <Link href={content.nav.navbar.conditions[0].link} passHref>
                  <NavDropdown.Item>
                    {content.nav.navbar.conditions[0].li}
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                {content.nav.navbar.conditions.slice(1).map(({ li, link }, i) => (
                  <Link key={i} href={link} passHref>
                    <NavDropdown.Item>
                      {li}
                    </NavDropdown.Item>
                  </Link>
                ))}
              </NavDropdown>
              <Nav.Item>
                <Nav.Link href={content.nav.navbar.shop.link} target="blank">
                  {content.nav.navbar.shop.li}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Link href={content.nav.navbar.blog.link} passHref>
                  <Nav.Link title={content.nav.navbar.blog.li}>
                    {content.nav.navbar.blog.li}
                  </Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href={content.nav.navbar.forms.link} passHref>
                  <Nav.Link>
                    {content.nav.navbar.forms.li}
                  </Nav.Link>
                </Link>
              </Nav.Item>
              {/* <NavDropdown title="Promos" id="promos">
                <NavDropdown.Divider />
                {content.nav.navbar.promos.map(({ li, link }, i) => (
                  <Link key={i} href={link} passHref>
                    <NavDropdown.Item>
                      {li}
                    </NavDropdown.Item>
                  </Link>
                ))}
              </NavDropdown> */}
              <Nav.Item>
                <Nav.Link className="d-block d-xl-none" href={content.nav.navbar.bookNow.link} target="blank" passHref>
                  {content.nav.navbar.bookNow.li}
                </Nav.Link>
                <Link className="d-none d-lg-block"
                  href={content.nav.navbar.bookNow.link} passHref>
                  <Button className="d-none d-lg-block">
                    {content.nav.navbar.bookNow.li}
                  </Button>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
}