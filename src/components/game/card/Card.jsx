import React from 'react'
import './card.scss'

export default function Card(props) {
  const {id, flipped, onClick, type, disabled, solved} = props

  const tryHere = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <div
      className={`flip-container ${flipped ? 'flipped' : ''} size`}
      onClick={() => disabled ? null : onClick(id)}
    >
      <div style={tryHere} className='flipper size'>
        <img
          style={{width:"90px", height:"90px",}} 
          className={`size ${flipped ? 'front' : 'back'}`}
          src={flipped || solved ? `${type}` : `/img/card-bg.png`}
          />
      </div>
    </div>
  )
}