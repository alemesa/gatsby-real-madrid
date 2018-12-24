import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './footer.scss'
import FacebookLogo from '../assets/svg/facebook.svg'
import TwitterLogo from '../assets/svg/twitter.svg'
import YoutubeLogo from '../assets/svg/youtube.svg'

const Footer = () => (
  <div className="Footer">
    <div className="left">
      <Link to="/">
        <img className="logo" src={FacebookLogo} alt="Facebook Logo" />
      </Link>
      <Link to="/">
        <img className="logo" src={TwitterLogo} alt="Twitter Logo" />
      </Link>
      <Link to="/">
        <img className="logo" src={YoutubeLogo} alt="Youtube Logo" />
      </Link>
    </div>
    <div className="right">Real Madrid © 2019</div>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: '',
}

export default Footer
