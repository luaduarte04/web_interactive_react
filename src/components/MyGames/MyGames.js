import React from 'react';
import './MyGames.scss';

import { Button, Typography } from '@material-ui/core';

import GameList from './GameList';
import filter from './filter.svg';


export default function MyGames(props) {
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
        <Button
          className="filter"
          color="primary"
          component="button"
          style={{ fontWeight: 'bold'}}>
            Filter
          <img
            className="my-games-icon"
            style={{marginLeft: "10px"}}
            src={filter}
            alt="filter icon" />
        </Button>
      </div>
      <GameList />
    </main>
  )
}