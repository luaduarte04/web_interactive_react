import React from "react";
import GameListItem from "./GameListItem";

import {
  makeStyles,
  Typography,
} from '@material-ui/core';

import './GameList.scss';

const useStyles = makeStyles((theme) => ({
  selectGame: {
    color: "white",
    backgroundColor: "#3f51b5",
    textAlign: "left",
    width: "100%",
    height: "auto",
    padding: "2px 0px 0px 10px",
  },
}));

export default function GameList(props) {
  const classes = useStyles();
  const {games, game, setGame} = props;

  return (
    <div className="game-list-container">
      <Typography
        className={classes.selectGame}
        style={{ fontWeight: 'bold'}}
        color="primary"
        component="h6"
        variant="h6"
      >
        Games
      </Typography>
      <ul>
        {games.map((item) =>
          <GameListItem
            key={item.id}
            title={item.title}
            description={item.description}
            type={item.type}
            level={item.level} 
            selected={item.id === game}
            setGame={() => setGame(item.id)}
          />
        )}
      </ul>
    </div>
  )
}
