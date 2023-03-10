import React from 'react'
import './Card.css'
const Card = ({emoji, heading, detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{detail}</span>
    </div>
  )
}

export default Card