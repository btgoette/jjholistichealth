import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Link from 'next/link'
import { Container, Button, Navbar, Nav, NavDropdown, Offcanvas, CloseButton } from 'react-bootstrap'

// Custom Data
import data from 'public/content/en_US/data/nav/nav.data'

import 'public/fonts/FontAwesome/fontawesome'

export default function CustomNav() {

  return (

    <nav className="sticky-top" aria-label="J&amp;J Navbar">
      <Navbar collapseOnSelect bg="light" expand="xl" className={data.nav.background}>
        <Container className="py-0 px-1">
          <div className="d-flex align-items-center">
            <Link href={data.nav.brand.jjLogo.link} passHref>
              <Navbar.Brand>
                <LazyLoadImage
                  src={data.nav.brand.jjLogo.image.src}
                  alt={data.nav.brand.jjLogo.image.alt}
                  className="logo ms-lg-0 ms-2"
                />
              </Navbar.Brand>
            </Link>
            <Link href={data.nav.brand.jjKidsLogo.link} passHref>
              <Navbar.Brand className="d-none d-sm-flex" >
                <LazyLoadImage
                  src={data.nav.brand.jjKidsLogo.image.src}
                  alt={data.nav.brand.jjKidsLogo.image.alt}
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
                  <Link href={data.nav.navbar.home.link} passHref>
                    <Nav.Link >
                      {data.nav.navbar.home.li}
                    </Nav.Link>
                  </Link>
                </Nav.Item>

                <NavDropdown.Divider />

                <Nav.Item>
                  <Link href={data.nav.navbar.kids.link} passHref>
                    <Nav.Link >
                      {data.nav.navbar.kids.li}
                    </Nav.Link>
                  </Link>
                </Nav.Item>

                <NavDropdown.Divider />

                <NavDropdown title="About" id="about-dropdown">
                  {data.nav.navbar.about.map(({ li, link }, i) => (
                    <Link key={i} href={link} passHref>
                      <NavDropdown.Item>
                        {li}
                      </NavDropdown.Item>
                    </Link>
                  ))}
                </NavDropdown>

                <NavDropdown.Divider />

                <Nav.Item>
                  <Link href={data.nav.navbar.services.link} passHref>
                    <Nav.Link>
                      {data.nav.navbar.services.li}
                    </Nav.Link>
                  </Link>
                </Nav.Item>

                <NavDropdown.Divider />

                <NavDropdown title="Health Conditions" id="conditions-dropdown">
                  {data.nav.navbar.conditions.map(({ li, link }, i) => (
                    <Link key={i} href={link} passHref>
                      <NavDropdown.Item>
                        {li}
                      </NavDropdown.Item>
                    </Link>
                  ))}
                </NavDropdown>

                <NavDropdown.Divider />

                <Nav.Item>
                  <Nav.Link href={data.nav.navbar.shop.link} target="blank">
                    {data.nav.navbar.shop.li}
                  </Nav.Link>
                </Nav.Item>

                <NavDropdown.Divider />

                <Nav.Item>
                  <Link href={data.nav.navbar.blog.link} passHref>
                    <Nav.Link title={data.nav.navbar.blog.li}>
                      {data.nav.navbar.blog.li}
                    </Nav.Link>
                  </Link>
                </Nav.Item>

                <NavDropdown.Divider />

                <Nav.Item>
                  <Link href={data.nav.navbar.forms.link} passHref>
                    <Nav.Link>
                      {data.nav.navbar.forms.li}
                    </Nav.Link>
                  </Link>
                </Nav.Item>

                <NavDropdown.Divider />

                <NavDropdown title="Promos" id="promos">
                  <NavDropdown.Divider />
                  {data.nav.navbar.promos.map(({ li, link }, i) => (
                    <Link key={i} href={link} passHref>
                      <NavDropdown.Item>
                        {li}
                      </NavDropdown.Item>
                    </Link>
                  ))}
                </NavDropdown>

                <NavDropdown.Divider />

                <Nav.Item>
                  <Link href={data.nav.navbar.bookNow.link} target="blank" passHref>
                    <Nav.Link>
                      {data.nav.navbar.bookNow.li}
                    </Nav.Link>
                  </Link>
                </Nav.Item>

              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Collapse className="d-none d-xl-flex" id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item className="d-flex d-xl-none">
                <Link href={data.nav.navbar.kids.link} passHref>
                  <Nav.Link >
                    {data.nav.navbar.kids.li}
                  </Nav.Link>
                </Link>
              </Nav.Item>
              <NavDropdown title="About" id="about-dropdown">
                <Link href={data.nav.navbar.about[0].link} passHref>
                  <NavDropdown.Item>
                    {data.nav.navbar.about[0].li}
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                {data.nav.navbar.about.slice(1).map(({ li, link }, i) => (
                  <Link key={i} href={link} passHref>
                    <NavDropdown.Item>
                      {li}
                    </NavDropdown.Item>
                  </Link>
                ))}
              </NavDropdown>
              <Nav.Item>
                <Link href={data.nav.navbar.services.link} passHref>
                  <Nav.Link>
                    {data.nav.navbar.services.li}
                  </Nav.Link>
                </Link>
              </Nav.Item>
              <NavDropdown title="Health Conditions" id="conditions-dropdown">
                <Link href={data.nav.navbar.conditions[0].link} passHref>
                  <NavDropdown.Item>
                    {data.nav.navbar.conditions[0].li}
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                {data.nav.navbar.conditions.slice(1).map(({ li, link }, i) => (
                  <Link key={i} href={link} passHref>
                    <NavDropdown.Item>
                      {li}
                    </NavDropdown.Item>
                  </Link>
                ))}
              </NavDropdown>
              <Nav.Item>
                <Nav.Link href={data.nav.navbar.shop.link} target="blank">
                  {data.nav.navbar.shop.li}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Link href={data.nav.navbar.blog.link} passHref>
                  <Nav.Link title={data.nav.navbar.blog.li}>
                    {data.nav.navbar.blog.li}
                  </Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href={data.nav.navbar.forms.link} passHref>
                  <Nav.Link>
                    {data.nav.navbar.forms.li}
                  </Nav.Link>
                </Link>
              </Nav.Item>
              <NavDropdown title="Promos" id="promos">
                <NavDropdown.Divider />
                {data.nav.navbar.promos.map(({ li, link }, i) => (
                  <Link key={i} href={link} passHref>
                    <NavDropdown.Item>
                      {li}
                    </NavDropdown.Item>
                  </Link>
                ))}
              </NavDropdown>
              <Nav.Item>
                <Nav.Link className="d-block d-xl-none" href={data.nav.navbar.bookNow.link} target="blank" passHref>
                  {data.nav.navbar.bookNow.li}
                </Nav.Link>
                <Link className="d-none d-lg-block"
                  href={data.nav.navbar.bookNow.link} passHref>
                  <Button className="d-none d-lg-block">
                    {data.nav.navbar.bookNow.li}
                  </Button>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav >

  );
}