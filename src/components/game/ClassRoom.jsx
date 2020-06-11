import React,{useEffect} from 'react'

// import "components/Application.scss";
import Board from "./board/Board";
import useGameData from "../../hooks/useGameData"
import GameList from "./GameList"

export default function ClassRoom({wss}) {
  const {
    state,
    setRunningGame, 
    flipCard,
    setGame,
    newGame
  } = useGameData();
  let requestGame = false;
  useEffect(() => {
    console.log("Classroom state changed:" ,state.game)
  wss.onopen = () => {
    // console.log('connected', states);
    // if(state.cards.length !== 0) {
      wss.send("initial")
    // }
  }

 
  wss.addEventListener("message", event => {
    console.log("flippedCard Data:", event.data)
    // wss.send("TESTS")
    if (event.data == 1) {
     console.log("geex relax im only 1 client")
      requestGame = true;
      console.log('true of false', requestGame)
      // console.log("starting new game", state.game, state.games);newGame()
    } else if(! JSON.parse(event.data).game) {
      console.log("recieving")
      wss.send("receive")
      requestGame = false;
    } else {
      requestGame = false;
      setRunningGame(JSON.parse(event.data))
    }
  
    // setRunningGame(JSON.parse(event.data))
  })
  // wss.onmessage = data => {

  //   // console.log('connected', states);
  //   console.log("Hi",data)
  //   // wss.send(data.data+"2")
  // }
  // wss.onclose = () => {
  //   wss.close();
  // };

  // return () => {
  //   wss.close();
  // };
  // if(requestGame) newGame();
  // console.log('true of false', requestGame)

  // if(requestGame && state.cards.length === 0){
  //   newGame()
  //   .then(() => {wss.send(JSON.stringify(state)); console.log(state)})
  // } 
},[])
console.log('true of false', requestGame)
useEffect(() => {
  // if(requestGame && state.cards.length === 0){
  //   newGame()
  //   .then(() => {wss.send(JSON.stringify(state)); console.log(state)})
  // } 
  if(wss.readyState === WebSocket.OPEN) {
    wss.send(JSON.stringify(state));
  }

}, [state.cards])

useEffect(() => {
  console.log("bonjour")
  if(wss.readyState === WebSocket.OPEN) {
    wss.send(JSON.stringify(state));
  }

}, [state.flipped, state.solved])

useEffect(() => {
  // if(requestGame){
    newGame();
  // }
}, [state.game])

console.log("a7a",state)
  return (
    <>
      <section className="sidebar">
      <hr className="sidebar__separator sidebar--centered" />
      <div className="sidebar__menu" >
        <GameList
          game={state.game} 
          setGame={setGame}
          games={state.games}
        />
      </div>

      </section>
      <section className="schedule">
        <div>
          <Board 
            cards={state.cards}
            flipped={state.flipped}
            onClick={flipCard}
            disabled = {state.disabled}
            solved={state.solved}
          />
        </div>
      </section>
    </>
  );
}
