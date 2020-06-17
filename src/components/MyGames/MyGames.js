import React, {useState, useEffect} from 'react';
import './MyGames.scss';
import { Button, makeStyles, Typography } from '@material-ui/core';
import GameList from './GameList';
import filter from './filter.svg';
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

export default function MyGames({user}) {
  const classes = useStyles();
  const [showFilter, setShowFilter] = useState(false);
  const [games, setGames] = useState("");
  const [deleting, setDeleting] = useState(true);
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

  const buttonStyle = {
    width: "100%",
    backgroundColor: "#3f51b5",
    color: "white",
    border: "none",
    fontSize: "medium",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "5%",
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
          onSubmit={ e => {e.preventDefault(); setShowFilter(false) }}
        >
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
              alt="filter icon" />
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
      {games && <GameList setDeleting={setDeleting}games ={games}/>}
      <div className={classes.form}>
        <CreateRoomButton getURL={getURL} />
      </div>
      <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => history.push("/newgame")}
          >
        CREATE NEW GAME
      </Button>
    </main>
  )
}