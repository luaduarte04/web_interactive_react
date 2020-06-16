import React, { useState } from 'react';
import './GameList.scss';
import './CopyLink.scss';

import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Button, Typography } from '@material-ui/core';

import {getURL, checkRoomExistance} from '../../helpers/newRoomHelper';

export default function CopyLink(props) {
  const {link, setLink} = useState(""); 
  const {copy, setCopy} = useState({
    value: props.gameLink,
    copied:true
  });

  function generateRandomLink() {
    getURL()
    .then(res => {
      const link = res.url;
      console.log("Link:", link)
      setLink(res.url);
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="copy-link-container">
      <div className="input-div">
        <input inputRef={link} />
      </div>
      <div className="buttons">
        <CopyToClipboard
          text={props.gameLink}
          onClick={() => {generateRandomLink(); setCopy({copied: true})}}>
          <button className="copy-button">
           {`CREATE & COPY LINK`}
          </button>
        </CopyToClipboard>
        <button
          className="close-button"
          onClick={props.handleChangeShare}
        >
          X
        </button>
      </div>
    </div>
  );
}