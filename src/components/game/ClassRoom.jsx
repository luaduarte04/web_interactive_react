import React,{useState,useEffect} from 'react'

// import "components/Application.scss";
import Board from "./board/Board";
import useGameData from "../../hooks/useGameData"
import GameList from "./GameList"
import Form from "./Form"
import StudentList from "./StudentList"
import socket from "./socket"

export default function ClassRoom({isTeacher}) {
  const [connection, setConnection] = useState();
  const [name, setName] = useState();
  const [studentNames, setStudentNames] = useState([])
  const {
    state,
    setRunningGame, 
    flipCard,
    setGame,
    newGame,
    setRequestGame
  } = useGameData();

  useEffect(()=> {
    setConnection(socket());
    // true);
  },[])

  useEffect(() => {
    if(connection) {
      connection.onopen = () => {     
        // console.log("sending initial connection")
        connection.send(JSON.stringify({subject:"initial"}))
      }
      connection.addEventListener("message", event => {
          const message = JSON.parse(event.data);
        if (message.subject == "initial" && !state.requestGame ) {
            setRequestGame( true)
            // console.log("only Client setting request to true")
        } else if(message.subject == "welcome") {
          console.log("sending request for on going game")
          connection.send(JSON.stringify({subject:"receive"}))
        } else if(message.subject === "state"){
            // console.log("initializing existing game")
            setRunningGame(message.state);
        } else if (message.subject === "student_names") {
          updateStudentNames(message.students)
        }  
      })
    }
  },[connection])

  useEffect(() => {

    if (connection) {  
      if(connection.readyState === WebSocket.OPEN) {
          // console.log("Sending state once state.cards has changed");
          connection.send(JSON.stringify({subject:"player_move",state}));
      }
    }
  }, [state.cards, state.flipped, state.solved])

  useEffect(() => {
    if (connection) {   
      if(connection.readyState === WebSocket.OPEN) {
        connection.send(JSON.stringify({subject:"setName",name}));
      }
    }
  },[name])

  useEffect(() => {
    if (connection) {  
      if(state.requestGame && isTeacher){
          // console.log("requesting new game");
        newGame();
      }
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
    {(!name && !isTeacher) && ( <Form  onSave={setUserName}/>)}
     { (name || isTeacher) && (
       <>
        <section className="sidebar">
          <hr className="sidebar__separator sidebar--centered" />
          <div className="sidebar__menu" >
            {isTeacher && <GameList
              game={state.game} 
              setGame={setGame}
              games={state.games}
            />}
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
