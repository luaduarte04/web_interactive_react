import React, { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function CopyLink(props) {
  const {copy, setCopy} = useState({
    value: props.gameLink,
    copied:true
  })

  return (
    <div>
      <input value={props.gameLink} />
      <CopyToClipboard
        text={props.gameLink}
        onClick={() => setCopy({copied: true})}>
        <button>Copy</button>
      </CopyToClipboard>
    </div>
  );
}