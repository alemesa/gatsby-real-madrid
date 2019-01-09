import React from 'react'
import Youtube from 'react-youtube'
import Hero from '../components/hero'
import './index.scss'

import Cards from '../components/cards'
import Layout from '../components/layout'

const opts = {
  playerVars: {
    autoplay: 0,
  },
}

class IndexPage extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Hero />
        <Cards quantity={3} />
        <Youtube videoId={'ku6iLrKhebc'} className={'YT-Player'} opts={opts} />
      </Layout>
    )
  }
}

export default IndexPage
