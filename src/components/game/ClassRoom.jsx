import React,{useState,useEffect} from 'react'
// import "components/Application.scss";
import Board from "./board/Board";
import useGameData from "../../hooks/useGameData"
import GameList from "./GameList"
import Form from "./Form"
import StudentList from "./StudentList"
import socket from "./socket"
import {useParams} from "react-router-dom";


export default function ClassRoom({isTeacher,checkRoomExistance}) {
  const [userId, setUserId] = useState(Math.floor(100000 + Math.random() * 900000))
  const [error, setError] = useState()
  const [room, setRoom] = useState();
  const [connection, setConnection] = useState();
  const [name, setName] = useState();
  const [studentNames, setStudentNames] = useState([{name:"Class",id:1}])
  const {
    state,
    setRunningGame, 
    flipCard,
    setGame,
    newGame,
    setRequestGame,
    fetchGameList,
    setTurn,
  } = useGameData();
  console.log("state turn", typeof state.turn)

  const roomKey = useParams();
  useEffect(()=> {
    
    checkRoomExistance(roomKey.id, isTeacher)
    .then((res) => {
      if (res.data){
        setRoom(res.data)
        setConnection(socket());
        if(isTeacher) {
          fetchGameList()
        }
      } else {
        if (isTeacher) {
          setRoom(false)
          setError("Another Teacher is hosting this room. You can only view room as guest please logout first to join.")
        } else {
          setRoom(false)
        }
      }
    })
    .catch(err => console.log(err))
   
  },[])

  useEffect(() => {
    if(connection) {
      connection.onopen = () => {     
        // console.log("sending initial connection")
        if (isTeacher) {
          connection.send(JSON.stringify({
            subject:"initial", 
            teacher:true,
            room:roomKey.id
          }))
        } else {
          connection.send(JSON.stringify({subject:"initial", room:roomKey.id}))
        }
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
          console.log("Student_name", message.students)
          updateStudentNames(message.students)
        }  else if(message.subject === "end-session"){
          setRoom(false)
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
  }, [state.cards, state.flipped, state.solved, state.turn])

  useEffect(() => {
    if (connection) {   
      if(connection.readyState === WebSocket.OPEN) {
        connection.send(JSON.stringify({subject:"setName",student: {name, id:userId}}));
      }
    }
  },[name])

  useEffect(() => {
    if (connection) {  
      if(state.requestGame && isTeacher){
        newGame();
      }
    }
  }, [state.game])

  function setUserName(uname) {
    setName(uname);
  }
  function updateStudentNames(students){
    const result = [];
    if (students.length > 0) {
      for(const student of students) {
        result.push(student.info)
      }
    }
    console.log("new students=", result)
    setStudentNames([{name:"Class",id:1},...result])
  }
  function whosTurn() {
    for (const student of studentNames){
      if (student.id === state.turn) {
        return student.name
      }
    }
  }
  console.log("room state",room)
  return (
    
    <section>
      {(!name && room && !isTeacher) && ( <Form  onSave={setUserName}/>)}      
        {((name || isTeacher)&&room) && (
        <>
          {name && <h3>HI {name}</h3>}
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
              <StudentList students={studentNames} isTeacher={isTeacher} setTurn={setTurn}/>
            </div>
            <div>
              {whosTurn()&&<h5>{`${whosTurn()}'s turn`}</h5>}
            </div>
            </section>
            <section className="schedule">
              <div>
                <Board 
                  cards={state.cards}
                  flipped={state.flipped}
                  onClick={flipCard}
                  disabled = {state.disabled ? true: (isTeacher ? false: (state.turn === 1 ? false : (userId === state.turn ? false: true)))}
                  solved={state.solved}
                />
              </div>
            </section>
          </>
        )}
        { (!room && !error) && <h1> ROOM SESSION NO LONGER EXISTS</h1>}
        {error && <h1>{error}</h1>}         
    </section>
    
  );
}
