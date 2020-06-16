import React from 'react';
import './GameList.scss';
import {
  TableCell,
  TableRow,
  FormControlLabel,
  Checkbox,
  Fade,
} from '@material-ui/core';
import {
  Link,
  withRouter
} from "react-router-dom";
import CopyLink from './CopyLink';
import DeleteGame from './DeleteGame';


function GameListItem({props, game}) {
  const [clickedShare, setClickedShare] = React.useState(false);
  const [clickedDelete, setClickedDelete] = React.useState(false);

  const handleChangeShare = () => {
    setClickedShare((prev) => !prev);
  };

  const handleChangeDelete = () => {
    setClickedDelete((prev) => !prev);
  };
  
  return (
    <React.Fragment>
      {!clickedShare && !clickedDelete &&
      <TableRow key={game.name}>
        <TableCell align="center">
          <FormControlLabel
            control={
              <Checkbox
                name="select-game"
                color="primary"
              />
            }
          />
        </TableCell>
        <TableCell align="left">{game.title}</TableCell>
        <TableCell align="left">{game.description}</TableCell>
        <TableCell align="left">{game.grade}</TableCell>
        <TableCell align="left">{game.subject}</TableCell>
        <TableCell align="left">{game.type}</TableCell>
        <TableCell align="left">{game.level}</TableCell>
        <TableCell align="center">
          <form onSubmit={ e => {e.preventDefault();}}>
            <button
              className="actions actions-share"
              onClick={handleChangeShare}
            />
            <Link to="/newgame">
              <button className="actions actions-edit" />
            </Link>
            <button
              className="actions actions-delete"
              onClick={handleChangeDelete}
            />
          </form>
        </TableCell>
      </TableRow>}
      { clickedShare &&
        <TableRow>
          <TableCell colSpan={8}>
              <Fade in={clickedShare}>
                  <CopyLink handleChangeShare={handleChangeShare} />
              </Fade>
          </TableCell>
        </TableRow>
      }
      { clickedDelete &&
        <TableRow>
          <TableCell colSpan={8}>
              <Fade in={clickedDelete}>
                  <DeleteGame handleChangeDelete={handleChangeDelete} />
              </Fade>
          </TableCell>
        </TableRow>
      }
    </React.Fragment>
  );
}

export default withRouter(GameListItem);

// return (
//   editMode ? <EditRowComponent ... /> : <RegularRowsComponent ...>
// )

{/* <button
            className="actions actions-share"
            onClick={ e => { e.preventDefault(); setShowLink(true); } }
            onClick={handleChange}>
            { showLink && <CopyLink gameLink={ game.gameLink } /> }
            <div className={classes.container}></div> */}