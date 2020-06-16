import React,{useState,useEffect} from 'react'
// import "components/Application.scss";
import Board from "./board/Board";
import useGameData from "../../hooks/useGameData"
import GameList from "./GameList"
import Form from "./Form"
import StudentList from "./StudentList"
import socket from "./socket"
import {useParams} from "react-router-dom";

import {
  makeStyles,
  Typography,
  Button,
  Avatar,
} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';

import './ClassRoom.scss';

const useStyles = makeStyles((theme) => ({
  selectPlayer: {
    color: "white",
    backgroundColor: "#3f51b5",
    textAlign: "left",
    width: "100%",
    height: "auto",
    padding: "2px 0px 0px 10px",
    marginTop: "3%",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    
  },
  notRoomSessionTitle: {
    color: "#3f51b5",
    textAlign: "center",
    fontSize: "2em",
    marginTop: "20%",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function ClassRoom({props,isTeacher,checkRoomExistance}) {
  const classes = useStyles();
  const [userId, setUserId] = useState(Math.floor(100000 + Math.random() * 900000))
  const [room, setRoom] = useState();
  const [connection, setConnection] = useState();
  const [name, setName] = useState();
  const [studentNames, setStudentNames] = useState([{name:"",id:1}])
  // const [studentNames, setStudentNames] = useState([{name:"Class",id:1}])
  const [currentGameInfo, setCurrentGameInfo] = useState()

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
    
    checkRoomExistance(roomKey.id)
    .then((res) => {
      if (res.data){
        setRoom(res.data)
        setConnection(socket());
        if(isTeacher) {
          fetchGameList()
        }
      } else {
        setRoom(false)
      }
    })
    .catch(err => console.log(err))
   
  },[])

  useEffect (() => {
    for (const game of state.games) {
      if (game.id === state.game) {
        setCurrentGameInfo({title:game.title, level:game.level})
      }
    }
  }, [state.game]);

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
  console.log("games state",state.games)
  
  return (
    <div>
      {(!name && room && !isTeacher) && ( <Form  onSave={setUserName}/>)}      
        {((name || isTeacher)&&room) && (
          <>
            <div className="super-div-main">
              {/* {name &&
                <h3>HI {name}</h3>
              } */}
              <div className="classroom-container">
                <section className="sidebar">
                  {/* <hr className="sidebar__separator sidebar--centered" /> */}
                  <div style={{width:"100%", height: 'auto'}}>
                    <div className="avatar"></div>
                  </div>
                  {isTeacher &&
                    <GameList
                      game={state.game} 
                      setGame={setGame}
                      games={state.games}
                    />
                  }
                  <div className="select-student-container">
                    <Typography
                      className={classes.selectPlayer}
                      style={{ fontWeight: 'bold'}}
                      color="primary"
                      component="h6"
                      variant="h6"
                    >
                      Players
                    </Typography>
                    <div>
                      { whosTurn() &&
                        <h5 className="whos-turn">
                          {`>> It's ${whosTurn()}'s turn`}
                        </h5>}
                    </div>
                    <div>
                      <StudentList
                        students={studentNames}
                        isTeacher={isTeacher}
                        setTurn={setTurn}
                      />
                    </div>
                  </div>
                </section>
                <section className="section-game">
                  <div className="classroom-board">
                    <div className="game-area-title">
                      <Typography
                        style={{ fontWeight: 'bold', textTransform: 'uppercase'}}
                        color="primary"
                        component="h6"
                        variant="h6"
                      >
                        {currentGameInfo && `${currentGameInfo.title}`}
                      </Typography>
                      <Typography
                        className=""
                        color="primary"
                        component="h6"
                        variant="h6"
                      >
                       {currentGameInfo && `Level - ${currentGameInfo.level}`}
                      </Typography>
                    </div>
                    <div className="game-area">
                      <Board 
                        cards={state.cards}
                        flipped={state.flipped}
                        onClick={flipCard}
                        disabled = {state.disabled ? true: (isTeacher ? false: (state.turn === 1 ? false : (userId === state.turn ? false: true)))}
                        solved={state.solved}
                      />
                    </div>
                  </div>
                  <form className={classes.form}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      fullWidth
                    >
                      LEAVE ROOM
                    </Button>
                  </form>
                </section>
              </div>
            </div>
          </>
        )}
      { !room &&
        <Typography
          className={classes.notRoomSessionTitle}
          style={{ fontWeight: 'bold'}}
          color="primary"
          component="h2"
          variant="h2"
        >
          ROOM SESSION NO LONGER EXISTS
        </Typography>
      }         
    </div>
  );
}
