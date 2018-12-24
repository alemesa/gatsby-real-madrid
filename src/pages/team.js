import React from 'react'
import './index.scss'

import Cards from '../components/cards'
import Layout from '../components/layout'
import PageTransition from 'gatsby-plugin-page-transitions'

class Team extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <PageTransition>
        <Layout>
          <Cards />
        </Layout>
      </PageTransition>
    )
  }
}

export default Team
