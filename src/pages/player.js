import React from 'react'
import { Link } from 'gatsby'

import './player.scss'
import Layout from '../components/layout'

import BabyLogo from '../assets/mini/baby.png'
import CalendarLogo from '../assets/mini/calendar.png'
import InstagramLogo from '../assets/mini/instagram.png'
import MoneyLogo from '../assets/mini/money.png'
import NameLogo from '../assets/mini/name.png'
import PassportLogo from '../assets/mini/passport.png'
import PositionLogo from '../assets/mini/position.png'
import ResumeLogo from '../assets/mini/resume.png'
import TwitterLogo from '../assets/mini/twitter.png'

const Player = ({ pageContext }) => (
  <Layout>
    <Link className="player-link" to="/team">
      Back to Team
    </Link>
    <div className="player-container">
      <div className="img-container">
        <img src={pageContext.data.strCutout} alt="" />
        <p className="player-name">
          <img src={NameLogo} alt="" />
          {pageContext.data.strPlayer}
        </p>
        <p>
          <img src={PositionLogo} alt="" />
          {pageContext.data.strPosition}
        </p>
        <p>
          <img src={PassportLogo} alt="" />
          {pageContext.data.strNationality}
        </p>
      </div>
      <div className="data-container">
        <p>
          <img src={BabyLogo} alt="" />
          Born: {pageContext.data.dateBorn}
        </p>
        <p>
          <img src={CalendarLogo} alt="" />
          Signed: {pageContext.data.dateSigned}
        </p>

        <p>
          <img src={MoneyLogo} alt="" />
          Signing Fee: {pageContext.data.strSigning}
        </p>
        <p className="player-description">
          <img src={ResumeLogo} alt="" />
          {pageContext.data.strDescriptionEN}
        </p>
        <a className="player-social-link" href={`https://${pageContext.data.strInstagram}`}>
          <img src={InstagramLogo} alt="" />
          Instagram
        </a>
        <a className="player-social-link" href={`https://${pageContext.data.strTwitter}`}>
          <img src={TwitterLogo} alt="" />
          Twitter
        </a>

        <img className="player-lg-img" src={pageContext.data.strThumb} alt="" />
      </div>
    </div>
  </Layout>
)

export default Player
