import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './header.scss'
import MadridLogo from '../assets/svg/logo.svg'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="left">
      <Link to="/">
        <img className="logo" src={MadridLogo} alt="Madrid Logo" />
      </Link>
      <Link to="/">Real Madrid</Link>
    </div>
    <div className="right">
      <Link to="/about">About</Link>
      <Link to="/team">Team</Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
