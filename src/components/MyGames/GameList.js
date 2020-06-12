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

function createData(gameName, subject, type, grade, level, date, gameLink) {
  return { gameName, subject, type, grade, level, date, gameLink };
}

const savedGames = [
  // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Eclair', 262, 16.0, 24, 6.0),
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData ( 
    'ABC',
    'Alphabet',
    'letters',
    2,
    "easy",
    Date.UTC(),
    'https://github.com/nkbt/react-copy-to-clipboard',
  ),
  createData (
    'Numbers 0 to 9',
    'Numbers',
    'numbers',
    1,
    "medium",
    Date.UTC(),
    'https://github.com/nkbt/react-copy-to-clipboard',
  ),
  createData ( 
    'Zoo Animals',
    'Animals',
    'color and size',
    1,
    "easy",
    Date.UTC(),
    'https://github.com/nkbt/react-copy-to-clipboard',
  ),
];


export default function GameList(props) {
  const classes = useStyles();
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCategories} align="left">Game Name</TableCell>
            <TableCell className={classes.tableCategories} align="left">Subject</TableCell>
            <TableCell className={classes.tableCategories} align="left">Type</TableCell>
            <TableCell className={classes.tableCategories} align="left">Grade</TableCell>
            <TableCell className={classes.tableCategories} align="left">Level</TableCell>
            <TableCell className={classes.tableCategories} align="left">Date</TableCell>
            <TableCell className={classes.tableCategories} align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {savedGames.map((game) => (
            <GameListItem game={game} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



// import React from 'react';


// import MaterialTable from 'material-table';
// import { Button, Typography } from '@material-ui/core';
// import AddBox from "@material-ui/icons/AddBox";
// import ArrowDownward from "@material-ui/icons/ArrowDownward";




// export default function GameList(props) {
//   const [state, setState] = React.useState({
//     columns: [
//       { title: 'Game Name', field: 'gameName' },
//       { title: 'Subject', field: 'subject' },
//       { title: 'Type', field: 'type' },
//       { title: 'Grade', field: 'grade', type: 'numeric' },
//       { title: 'Level', field: 'level' },
//       { title: 'Date of creation', field: 'dateCreation' },
//     ],
//     data: [
//       { 
//         gameName: 'ABC',
//         subject: 'Alphabet',
//         type: 'letters',
//         grade: 2,
//         level: "easy",
//         dateCreation: Date.UTC(),
//       },
//       { 
//         gameName: 'Numbers 0 to 9',
//         subject: 'Numbers',
//         type: 'numbers',
//         grade: 1,
//         level: "medium",
//         dateCreation: Date.UTC(),
//       },
//       { 
//         gameName: 'Zoo Animals',
//         subject: 'Animals',
//         type: 'color and size',
//         grade: 1,
//         level: "easy",
//         dateCreation: Date.UTC(),
//       },
//     ],
//   });

//   return (
//     <MaterialTable
//       columns={state.columns}
//       data={state.data}
//       editable={{
//         onRowUpdate: (newData, oldData) =>
//           new Promise((resolve) => {
//             setTimeout(() => {
//               resolve();
//               if (oldData) {
//                 setState((prevState) => {
//                   const data = [...prevState.data];
//                   data[data.indexOf(oldData)] = newData;
//                   return { ...prevState, data };
//                 });
//               }
//             }, 600);
//           }),
//         onRowDelete: (oldData) =>
//           new Promise((resolve) => {
//             setTimeout(() => {
//               resolve();
//               setState((prevState) => {
//                 const data = [...prevState.data];
//                 data.splice(data.indexOf(oldData), 1);
//                 return { ...prevState, data };
//               });
//             }, 600);
//           }),
//       }}
//     />
//   );
// }