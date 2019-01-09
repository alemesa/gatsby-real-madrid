import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import './404.scss'

const NotFoundPage = () => (
  <Layout>
    <div className="NotFound">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Go to Home</Link>
    </div>
  </Layout>
)

export default NotFoundPage
