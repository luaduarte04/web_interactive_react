import React,{useState,useEffect} from 'react'

// import "components/Application.scss";
import Board from "./board/Board";
import useGameData from "../../hooks/useGameData"
import GameList from "./GameList"
import Form from "./Form"
import StudentList from "./StudentList"

export default function ClassRoom({wss}) {
  const [name, setName] = useState("");
  const [studentNames, setStudentNames] = useState([])
  const {
    state,
    setRunningGame, 
    flipCard,
    setGame,
    newGame,
    setRequestGame
  } = useGameData();

  useEffect(() => {
    wss.onopen = () => {     
      console.log("sending initial connection")
      wss.send(JSON.stringify({subject:"initial"}))
    }
    wss.addEventListener("message", event => {
        const message = JSON.parse(event.data);
      if (message.subject == "initial" && !state.requestGame ) {
          setRequestGame( true)
          console.log("only Client setting request to true")
      } else if(message.subject == "welcome") {
        console.log("sending request for on going game")
        wss.send(JSON.stringify({subject:"receive"}))
      } else if(message.subject === "state"){
          console.log("initializing existing game")
          setRunningGame(message.state);
      } else if (message.subject === "student_names") {
        updateStudentNames(message.students)
      }  
    })
  },[name])

  useEffect(() => {
    if(wss.readyState === WebSocket.OPEN) {
        console.log("Sending state once state.cards has changed");
        wss.send(JSON.stringify({subject:"player_move",state}));
    }
  }, [state.cards, state.flipped, state.solved])

  useEffect(() => {
    console.log("BALOOJA")
    if(wss.readyState === WebSocket.OPEN) {
      wss.send(JSON.stringify({subject:"setName",name}));
    }
  },[name])

  useEffect(() => {
    if(state.requestGame){
        console.log("requesting new game");
      newGame();
    }
  }, [state.game])

  function setUserName(uname) {
    setName(uname);
  }
  function updateStudentNames(students){
    const result = [];
    for(const student of students) {
      result.push(student.name)
    }
    setStudentNames(result)
  }

  return (
    
    <section>
    {!name && ( <Form  onSave={setUserName}/>)}
     { name && (
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
          <div>
            <StudentList names={studentNames}/>
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
      )}
    </section>
    
  );
}
