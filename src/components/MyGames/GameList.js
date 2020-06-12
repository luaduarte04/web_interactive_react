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

// 1 - add remove to row
// 2 - add this where in my thing?
    // <div className="remove">
    // <a href="#" onClick={() => remove(id)}>X</a>
    // </div>




// const Row = ({id, title, priority, type, complete, remove}) => (
//   <div className="row">
//     <div className="remove">
//       <a href="#" onClick={() => remove(id)}>X</a>
//     </div>
//     <div>{id}</div>
//     <div>{title}</div>
//     <div>{priority}</div>
//     <div>{type}</div>    
//     <div>{complete}</div>    
//   </div>
// );

// class Table extends React.Component {
//   state = {
//     data: [
//       {id: 403, title: 'Task 403', priority: 'High', type: 'Improvement', complete: 100}, 
//       {id: 532, title: 'Task 532', priority: 'Medium', type: 'Improvement', complete: 30}, 
//       {id: 240, title: 'Task 240', priority: 'High', type: 'Story', complete: 66},
//       ],
//     }; 
  
//   /* 
//      I like to write it this way to explicity state that a function is being returned
//      But you could simplify this by using arrow syntax twice,
    
//      compareBy = (key) => (a,b) => { ...... }
//   */
//   compareBy = (key) => {
//     return function(a, b) {
//     if (a[key] < b[key]) return -1;
//     if (a[key] > b[key]) return 1;
//     return 0;
//     };
//   };
   
//   sortBy = (key) => {
//     let arrayCopy = [...this.state.data];
//     arrayCopy.sort(this.compareBy(key));
//     this.setState({data: arrayCopy});
//   };

//   remove = (rowId) => {
//     // Array.prototype.filter returns new array
//     // so we aren't mutating state here
//     const arrayCopy = this.state.data.filter((row) => row.id !== rowId);
//     this.setState({data: arrayCopy});
//   };
    
//   render() {
//     const rows = this.state.data.map( (rowData) => <Row remove={this.remove} {...rowData } />);

//     return (
//       <div className="table">
//         <div className="header">
//           <div className="remove"></div>
//           <div onClick={() => this.sortBy('id')} >ID</div>
//           <div onClick={() => this.sortBy('title')}>Title</div>
//           <div onClick={() => this.sortBy('priority')}>Priority</div>
//           <div onClick={() => this.sortBy('type')}>Issue Type</div>
//           <div onClick={() => this.sortBy('complete')}>% Complete</div>
//         </div>
//         <div className="body">
//           {rows}
//         </div>
//       </div>
//     );
    
//   }
// }

// ReactDOM.render(<Table />, document.getElementById('app'));





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