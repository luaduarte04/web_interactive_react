import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Checkbox, Typography} from '@material-ui/core';

import './MyGames.scss';
import './Filter.scss';


export default function Filter(props) {
  const [state, setState] = React.useState({
    gameName: false,
    subjectAlphabet: false,
    subjectNumbers: false,
    subjectColors: false,
    typeMemory: false,
    typeSorting: false,
    typePuzzle: false,
    gradeOne: false,
    gradeTwo: false,
    gradeThree: false,
    levelEasy: false,
    levelMedium: false,
    levelHard: false,
    date: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const typographyTitle = {
    color: "white",
    backgroundColor: "#3f51b5",
    fontWeight: 'bold',
    textAlign: "left",
    fontSize: "0.5em",
    paddingTop: "2px",
    paddingLeft: "5px",
    marginTop: "4%",
  };

  const typographyCheckbox = {
    fontSize: "0.7em",
  }

  return (
      <FormGroup column>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.gameName}
              onChange={handleChange}
              name="gameName"
              color="primary"
            />
          }
          label="Game Name - A to Z"
        />
        <div>
          <Typography
            style={ typographyTitle }
            color="primary"
            component="p"
            variant="p">
            SUBJECT
          </Typography>
          <div className="filter-category">
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.subjectAlphabet}
                  onChange={handleChange}
                  name="subjectAlphabet"
                  color="primary"
                />
              }
              label="Alphabet"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.subjectNumbers}
                  onChange={handleChange}
                  name="subjectNumbers"
                  color="primary"
                />
              }
              label="Numbers"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.subjectColors}
                  onChange={handleChange}
                  name="subjectColors"
                  color="primary"
                />
              }
              label="Colors"
            />
          </div>
        </div>
        <div>
          <Typography
            style={ typographyTitle }
            color="primary"
            component="p"
            variant="p">
            TYPE
          </Typography>
          <div className="filter-category">
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.typeMemory}
                  onChange={handleChange}
                  name="typeMemory"
                  color="primary"
                />
              }
              label="Memory"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.typeSorting}
                  onChange={handleChange}
                  name="typeSorting"
                  color="primary"
                />
              }
              label="Sorting"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.typePuzzle}
                  onChange={handleChange}
                  name="typePuzzle"
                  color="primary"
                />
              }
              label="Puzzle"
            />
          </div>
        </div>
        <div>
          <Typography
            style={ typographyTitle }
            color="primary"
            component="p"
            variant="p">
            GRADE
          </Typography>
          <div className="filter-category">
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.gradeOne}
                  onChange={handleChange}
                  name="gradeOne"
                  color="primary"
                />
              }
              label="1"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.gradeTwo}
                  onChange={handleChange}
                  name="gradeTwo"
                  color="primary"
                />
              }
              label="2"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.gradeThree}
                  onChange={handleChange}
                  name="gradeThree"
                  color="primary"
                />
              }
              label="3"
            />
          </div>
        </div>
        <div>
          <Typography
            style={ typographyTitle }
            color="primary"
            component="p"
            variant="p">
            LEVEL
          </Typography>
          <div className="filter-category">
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.levelEasy}
                  onChange={handleChange}
                  name="levelEasy"
                  color="primary"
                />
              }
              label="Easy"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.levelMedium}
                  onChange={handleChange}
                  name="levelMedium"
                  color="primary"
                />
              }
              label="Medium"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.levelHard}
                  onChange={handleChange}
                  name="levelHard"
                  color="primary"
                />
              }
              label="Hard"
            />
          </div>
        </div>
        <FormControlLabel
          style={{fontSize: "200px"}}
          control={
            <Checkbox
              checked={state.date}
              onChange={handleChange}
              name="date"
              color="primary"
            />
          }
          label={
            <Typography
              style={ typographyCheckbox }
              color="primary"
              component="p"
              variant="p">
                Date - recent to old
            </Typography>
          }
        />
      </FormGroup>
  );
}

// 1 - we have to figure it out how the filters will work
// 2 - i cant remove checkbox right after i click