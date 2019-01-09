import React from 'react'
import './jerseys.scss'

import { JerseysImages } from './image'

const Jerseys = () => (
  <>
    <h2 className="Jersey-title">Jerseys</h2>
    <div className="Jerseys">
      <JerseysImages />
      <h4>Home - White</h4>
      <h4>Visitor - Blue</h4>
      <h4>Third - Coral</h4>
    </div>
  </>
)

export default Jerseys
