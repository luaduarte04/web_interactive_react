import React from 'react';
import './GameList.scss';
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import GameListItem from './GameListItem';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableCategories: {
    fontWeight: "bold",
    color: "#3f51b5",
    fontSize: "1em",
  }
});

export default function GameList(props) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell
            className={classes.tableCategories}
            align="center"
            textAlign="center"
          >
            Select{<br/>}Game
            </TableCell>
            <TableCell className={classes.tableCategories} align="left">Game Name</TableCell>
            <TableCell className={classes.tableCategories} align="left">Description</TableCell>
            <TableCell className={classes.tableCategories} align="left">Grade</TableCell>
            <TableCell className={classes.tableCategories} align="left">Subject</TableCell>
            <TableCell className={classes.tableCategories} align="left">Type</TableCell>
            <TableCell className={classes.tableCategories} align="left">Level</TableCell>
            <TableCell className={classes.tableCategories} align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.games.map((game) => (
            <GameListItem game={game} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}