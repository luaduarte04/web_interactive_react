import React from 'react';
import './DeleteGame.scss';


export default function CopyLink(props) {

  return (
    <div className="delete-game-container">
      <div className="p-div">
        <p>
          Are you sure you want to delete this game?
        </p>
      </div>
      <div className="buttons">
        <button className="confirm-button">
          CONFIRM 
        </button>
        <button className="cancel-button" onClick={props.handleChangeDelete}>
          CANCEL
        </button>
      </div>
    </div>
  );
}