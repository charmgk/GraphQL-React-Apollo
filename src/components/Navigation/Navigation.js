import React from 'react'

// Bootstrap components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// import Link from react-router-bootstrap
import Link from 'react-router-dom/Link'

import './Navigation.scss'

export default () => {
  return (
      <Navbar bg="primary" expand="lg" variant="dark">
        <Navbar.Brand href="#home">Starwars API</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="float-right">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link className='link-color' to='/'>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='link-color' to='/about'>
                About
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
};