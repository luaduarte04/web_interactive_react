import React from 'react'
import Card from '../card/Card'

import "./board.css"
export default function board(props){
  const {cards, flipped, onClick, disabled, solved} = props
  return (
    <>
      <div className="board">
      {cards.map( card => {

        return (
          <Card className="board__box"
            key={card.id}
            type={card.type}
            id={card.id}
            back={card.back}
            flipped ={flipped.includes(card.id)}
            onClick= {onClick}
            disabled={disabled || solved.includes(card.id)}
            solved={solved.includes(card.id)}
          />
        )
        }) 
      }
      </div>
    </>
  )
}

