import React from 'react'
import './info.scss'
import copy from '../copy/copy'

const Info = () => (
  <div className="Info">
    <h2>{copy.team.strTeam} CF</h2>
    <p>Since {copy.team.intFormedYear}</p>
    <p>{copy.team.strLeague}</p>
    <p>Stadium: {copy.team.strStadium}</p>
    <p>Capacity: {copy.team.intStadiumCapacity}</p>
    <p>{copy.team.strStadiumDescription}</p>
  </div>
)

export default Info
