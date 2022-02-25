import React from 'react'
import { Nav, Navbar } from "react-bootstrap";

const MyNavbar = ({beats = false, setLoading}) => {
  return (
    <div className="nav-menu d-flex justify-content-start navbar-section">
      <Navbar className='navbar-main' collapseOnSelect expand="lg" bg="black" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link
                  href="/"
                  className="header-link"
                  onClick={() => {setLoading(true)}}
                >
                  <img
                    loading="lazy"
                    src="/Assets/logo.png"
                    alt="logo"
                    className="logo-link"
                  />
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link
                  href="mailto:talha23c@hotmail.com?subject=slivermuse"
                  className="header-link"
                >
                  <img
                    loading="lazy"
                    src="/Assets/contact.png"
                    alt="contact"
                    className="contact-link"
                  />
                </Nav.Link>
                <Nav.Link
                  href={beats ? "/" : "/beats"}
                  className="header-link"
                  onClick={() => {setLoading(true)}}
                >
                  <img
                    loading="lazy"
                    src={beats ? "/Assets/home.png" : "/Assets/beats.png"}
                    alt="beats"
                    className="contact-link"
                  />
                </Nav.Link>
              </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default MyNavbar