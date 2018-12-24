import { Link } from 'gatsby'
import React from 'react'
import './hero.scss'

const Hero = () => (
  <div className="Hero">
    <div className="container">
      <p className="title">Real Madrid</p>
      <p className="subtitle">
        Real Madrid is the best football club in the history of football...
        period. Come fight me
      </p>
      <Link to="/about">Go to About</Link>
    </div>
    <div className="badge" />
  </div>
)

Hero.propTypes = {}

Hero.defaultProps = {}

export default Hero
