import React,{useEffect} from 'react'
import Card from '../card/Card'

import "./board.css"
// const WebSocket = require("ws");
export default function Board(props){
  const {cards, flipped, onClick, disabled, solved} = props
  
  // useEffect(() => {
  //   const wss = new WebSocket('ws://localhost:12345'),
  //     box = document.getElementById('box'),
  //     msg = document.getElementById('msg');
  //   wss.addEventListener('open', () => {
  //     console.log('connected');
  //   })

  //   wss.addEventListener('message', e => {
  //     let p = document.createElement('p');
  //     p.textContent = e.data;
  //     box.appendChild(p);
  //   })
    
  //   msg.addEventListener('keydown', e => {
  //     let kc = e.which || e.keyCode;
  //     if(kc === 13) {
  //       send(msg.value);
  //       msg.value = '';
  //     }
  //   })
  //   function send(data) {
  //     if(wss.readyState === WebSocket.OPEN) {
  //       wss.send(data);
  //     } else {
  //       throw 'Not Connected'
  //     }
  //   }
  // })
 

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
      {/* <div id="box"></div>
      <input type="text" id="msg">
      </input> */}
    </>
  )
}

