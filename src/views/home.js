import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Future Creative Orchestrator</title>
        <meta property="og:title" content="Future Creative Orchestrator" />
      </Helmet>
    </div>
  )
}

export default Home
