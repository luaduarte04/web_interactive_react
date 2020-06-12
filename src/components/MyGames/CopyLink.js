import React, { useState } from 'react';
import './GameList.scss';
import './CopyLink.scss';

import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Button, Typography } from '@material-ui/core';

export default function CopyLink(props) {
  const {copy, setCopy} = useState({
    value: props.gameLink,
    copied:true
  })

  return (
    <div className="copy-link-container">
      <div className="input-div">
        <input value={props.gameLink} />
      </div>
      <div className="buttons">
        <CopyToClipboard
          text={props.gameLink}
          onClick={() => setCopy({copied: true})}>
          <button className="copy-button">
           COPY 
          </button>
        </CopyToClipboard>
        <button className="close-button" onClick={props.handleChangeShare}>X</button>
      </div>
    </div>
  );
}