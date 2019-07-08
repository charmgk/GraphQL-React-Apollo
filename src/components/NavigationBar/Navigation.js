import React from 'react'

// Bootstrap components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './Navigation.scss'

// import Link from react-router-bootstrap
const Link = require("react-router-dom").Link

export default () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Navbar.Brand href="#home">Starwars API</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="float-right">
        <Nav className="ml-auto">
          <Link className='link-color mr-2' to='/'>
            Home
              </Link>
          <Link className='link-color ml-2' to='/about'>
            About
              </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};