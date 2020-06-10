import React from 'react';
import './GameList.scss';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import share from './share.svg';
import edit from './edit.svg';
import deleteGame from './deleteGame.svg';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function GameList(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
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