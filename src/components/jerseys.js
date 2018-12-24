import React from 'react'
import './jerseys.scss'
import FirstJersey from '../assets/home_jersey.jpeg'
import SecondJersey from '../assets/visitor_jersey.jpeg'
import ThirdJersey from '../assets/third_jersey.jpeg'

const Jerseys = () => (
  <>
    <h2 className="Jersey-title">Jerseys</h2>
    <div className="Jerseys">
      <Jersey background={FirstJersey} />
      <Jersey background={SecondJersey} />
      <Jersey background={ThirdJersey} />
      <h4>Home - White</h4>
      <h4>Visitor - Blue</h4>
      <h4>Third - Coral</h4>
    </div>
  </>
)

export default Jerseys

const Jersey = props => (
  <div
    className="Jersey"
    style={{ backgroundImage: `url(${props.background})` }}
  />
)
