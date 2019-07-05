import React from 'react'

// Bootstrap components
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

// Custom css
import './Jumbotron.css'

const Jumbo = () => (
  <Container fluid>
    <Jumbotron className='mt-2 jumbo'>
      <h1>STAR WARS API PLAYGROUND!</h1>
      <p>
        This is the Star Wars API search tool. Search the starwars movies and Characters by their titles and/or Names. Happens behind the scenes as you type
        </p>
    </Jumbotron>
  </Container>
)

export default Jumbo;