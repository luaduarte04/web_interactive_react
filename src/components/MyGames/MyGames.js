import React, {useState, useEffect} from 'react';
import './MyGames.scss';
import { Button, makeStyles, Typography } from '@material-ui/core';
import GameList from './GameList';
import filter from './filter.svg';
import addGame from './add-game.svg';
import Filter from './Filter';
import authTeacher from "../../hooks/authTeacher";

import CreateRoomButton from '../createRoom/CreateRoomButton';
import {getURL, checkRoomExistance} from '../../helpers/newRoomHelper';
import {useHistory} from "react-router-dom";




const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function MyGames({gameHistory, user}) {
  const classes = useStyles();
  const [showFilter, setShowFilter] = useState(false);
  const [games, setGames] = useState("");
  const [deleting, setDeleting] = useState(true);
  const [chosenGames, setChosenGames] = useState([]);
  const history = useHistory();
  
  const { doRequest } = authTeacher({
    url: 'http://localhost:3001/teacher/games',
    method: 'get',
    body: {}
  })
  useEffect( () => {
    if (!user){
      history.push('/login')
    } else {
      doRequest()
      .then(response => {
        setGames(response.teacherGames);
      })
      .catch(err => console.log(err))
    }
    return (() => setGames(""));
  },[deleting]);
  
  const handleChange = (prev) => {
    setShowFilter((prev) => !prev);
  };

  const handleClose = () => {
    setShowFilter(false);
  };

  function chooseGames(val, id) {
    if (val) {
      setChosenGames(prev => [...prev, parseInt(id)])
    } else {
      setChosenGames(prev => prev.filter(c => c !== parseInt(id)))
    }
  }

  const buttonStyle = {
    width: "100%",
    backgroundColor: "#3f51b5",
    color: "white",
    border: "none",
    fontSize: "medium",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "15%",
    paddingTop: "2%",
    paddingBottom: "2%",
    textTransform: "uppercase",
  }

  const filterBox ={
    position: "absolute",
    width: "20%",
    height: "auto",
    right: "0",
    marginRight: "5%",
    zIndex: "1",
    backgroundColor: "white",
    padding: "5px 10px 10px 10px",
    boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.3)",
    borderRadius: '5px',
    marginTop: "4%",
  }
  return (
    <main>
      <div className="header">
        <Typography
          style={{ fontWeight: 'bold'}}
          color="primary"
          component="h2"
          variant="h2">
          My Games
        </Typography>
        <form
          className="buttons-form-cantainer"
          onSubmit={ e => {e.preventDefault(); setShowFilter(false) }}
        >
          <Button
            className="create-game-button-mygames-page"
            color="primary"
            component="button"
            style={{ fontWeight: 'bold', marginRight: "5%"}}
            href="/newgame"
          >
            Create New Game
            <img
              className="my-games-icon"
              style={{marginLeft: "10px"}}
              src={addGame}
              alt="create new game icon"
            />
          </Button>
          <Button
            className="filter"
            color="primary"
            component="button"
            style={{ fontWeight: 'bold'}}
            onClick={ e => {e.preventDefault(); handleChange(e) }}
          >
            Filter
            <img
              className="my-games-icon"
              style={{marginLeft: "10px"}}
              src={filter}
              alt="filter icon"
            />
          </Button>
          { showFilter &&
            <div style={filterBox}>
              <Filter />
              <button
                onClick={handleClose}
                type="submit"
                style={buttonStyle}
              >
                Set filter
              </button>
            </div> 
          }
        </form>
      </div>
      {games && <GameList chooseGames={chooseGames}setDeleting={setDeleting}games ={games}/>}
      <div className={classes.form}>
        <CreateRoomButton gameHistory={gameHistory} selected={chosenGames} getURL={getURL} />
      </div>
    </main>
  )
}