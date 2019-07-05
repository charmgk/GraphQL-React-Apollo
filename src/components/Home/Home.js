import React from 'react'

// Bootstrap component
import Jumbotron from '../Jumbotron/Jumbotron'

// Search Custom Container
import Search from '../Search/SearchFetch'

const Home = () => {
  return (
    <div>
      <Jumbotron />
      <Search />
    </div>
  )
}

export default Home;