import React from 'react'
import './card.css'

export default function Card(props) {
  const {id, flipped, onClick, type, disabled, solved} = props
  return (
    <div 
      className={`flip-container ${flipped ? 'flipped' : ''} size`}
      onClick={() => disabled ? null : onClick(id)}
    >
      <div className='flipper size'>
        <img 
          className={`size ${flipped ? 'front' : 'back'}`}
          src={flipped || solved ? `${type}` : `/img/back.png`}
          />
      </div>
    </div>  
  )
}