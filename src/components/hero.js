import { Link } from 'gatsby'
import React from 'react'
import './Hero.scss'
import gsap from 'gsap'
import { textEasing } from '../util/animations'

class Hero extends React.PureComponent {
  componentDidMount() {
    gsap.set([this.title, this.subtitle, this.badge], { autoAlpha: 0, y: 25 })
    gsap.to(this.title, 0.5, { y: 0, autoAlpha: 1, ease: textEasing, delay: 0.167 })
    gsap.to([this.subtitle, this.badge], 0.5, { y: 0, autoAlpha: 1, ease: textEasing, delay: 0.334 })
  }

  render() {
    return (
      <div className="Hero">
        <div className="container">
          <p className="title" ref={t => (this.title = t)}>
            Real Madrid
          </p>
          <p className="subtitle" ref={t => (this.subtitle = t)}>
            Real Madrid is the best football club in the history of football... period. Come fight me
          </p>
          <Link to="/about">Go to About</Link>
        </div>
        <div className="badge" ref={t => (this.badge = t)} />
      </div>
    )
  }
}

Hero.propTypes = {}

Hero.defaultProps = {}

export default Hero
