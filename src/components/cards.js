import { navigate } from 'gatsby'
import React from 'react'
import './cards.scss'
import copy from '../copy/copy'
import NameLogo from '../assets/mini/name.png'
import PositionLogo from '../assets/mini/position.png'
import CountryLogo from '../assets/mini/country.png'

const Cards = props => (
  <div className="Cards">
    {copy.players
      .slice(0, props.quantity || copy.players.length)
      .filter(player => player.strThumb)
      .map((player, index) => (
        <Card key={index} player={player} background={player.strThumb} />
      ))}
  </div>
)

export default Cards

const Card = props => (
  <div
    className="Card"
    style={{ backgroundImage: `url(${props.background})` }}
    onClick={() => navigate(`/${props.player.strRoute}`)}
    role="link"
  >
    <div className="text-container">
      <h3>
        <img src={NameLogo} alt="" /> {props.player.strPlayer}
      </h3>
      <h4>
        <img src={PositionLogo} alt="" /> {props.player.strPosition}
      </h4>
      <h4>
        <img src={CountryLogo} alt="" /> {props.player.strNationality}
      </h4>
    </div>
  </div>
)
