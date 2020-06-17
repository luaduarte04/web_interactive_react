import React from 'react';
import './DeleteGame.scss';
import {deleteGame} from "../../helpers/gameHelpers"

export default function DeleteGame(props) {
  function DeleteGame() {
    deleteGame(props.gameId)
    .then(res => {
      props.handleChangeDelete()
      props.setDeleting(prev => !prev);
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="delete-game-container">
      <div className="p-div">
        <p>
          Are you sure you want to delete this game?
        </p>
      </div>
      <div className="buttons">
        <button className="confirm-button" onClick={() => DeleteGame()}>
          CONFIRM 
        </button>
        <button className="cancel-button" onClick={props.handleChangeDelete}>
          CANCEL
        </button>
      </div>
    </div>
  );
}