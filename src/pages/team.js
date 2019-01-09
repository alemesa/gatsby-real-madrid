import React from 'react'
import './index.scss'

import Cards from '../components/cards'
import Layout from '../components/layout'

class Team extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <Layout>
        <Cards />
      </Layout>
    )
  }
}

export default Team
