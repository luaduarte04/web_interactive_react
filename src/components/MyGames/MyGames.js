import React, {useState} from 'react';
import './MyGames.scss';

import { Button, Typography } from '@material-ui/core';

import GameList from './GameList';
import filter from './filter.svg';
import Filter from './Filter';


export default function MyGames(props) {
  const [showFilter, setShowFilter] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setShowFilter(false);
  };

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
        <form onSubmit={ e => {e.preventDefault(); setShowFilter(false) }}>
          <Button
            className="filter"
            color="primary"
            component="button"
            style={{ fontWeight: 'bold'}}
            onClick={ e => {e.preventDefault(); setShowFilter(true) }}

            //onClick={handleMenu}
          >
              Filter
            <img
              className="my-games-icon"
              style={{marginLeft: "10px"}}
              src={filter}
              alt="filter icon" />
          </Button>
          { showFilter &&
            <div>
              <Filter />
              <button
                onClick={handleClose}
                type="submit"
                style={{ fontWeight: 'bold'}}
              >
                Set filter!
              </button>
            </div> 
          }
        </form>
      </div>
      <GameList />
    </main>
  )
}