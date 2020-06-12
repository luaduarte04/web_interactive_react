import React, { useState } from 'react';
import './GameList.scss';

import {
  TableCell,
  TableRow,
} from '@material-ui/core';

import CopyLink from './CopyLink';


export default function GameListItem(props) {
  const [showLink, setShowLink] = useState(false);

  const game = props.game
  return (
    <TableRow key={game.name}>
      <TableCell align="left">{game.gameName}</TableCell>
      <TableCell align="left">{game.subject}</TableCell>
      <TableCell align="left">{game.type}</TableCell>
      <TableCell align="left">{game.grade}</TableCell>
      <TableCell align="left">{game.level}</TableCell>
      <TableCell align="left">{game.date}</TableCell>
      <TableCell align="center">
        <form onSubmit={ e => {e.preventDefault(); setShowLink(false);}}>
          <button
            className="actions actions-share"
            onClick={ e => { e.preventDefault(); setShowLink(true); } } />
            { showLink && <CopyLink gameLink={ game.gameLink } /> }
          <button className="actions actions-edit" />
          <button className="actions actions-delete" />
        </form>
      </TableCell>
    </TableRow>
  );
}