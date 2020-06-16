import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox, Typography} from '@material-ui/core';

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
    paddingBottom: "2px",
    paddingLeft: "5px",
    marginTop: "4%",
    textTransform: "uppercase",
  };

  const typographyCheckbox = {
    fontSize: "0.8em",
    marginLeft: "-5px",
  }

  return (
      <FormGroup column>
        <div>
          <Typography
            style={ typographyTitle }
            color="primary"
            component="p"
            variant="p">
            Game Name
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.gameName}
                onChange={handleChange}
                name="gameName"
                color="primary"
                size="small"
              />
            }
            label={
              <Typography
                style={ typographyCheckbox }
                color="primary"
                component="p"
                variant="p">
                  From A - Z
              </Typography>
            }
          />
        </div>
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
              style={{height:"20px", marginTop: "4%"}}
              control={
                <Checkbox
                  checked={state.subjectAlphabet}
                  onChange={handleChange}
                  name="subjectAlphabet"
                  color="primary"
                  size="small"
                />
              }
              label={
                <Typography
                  style={ typographyCheckbox }
                  color="primary"
                  component="p"
                  variant="p">
                    Alphabet
                </Typography>
              }
            />
            <FormControlLabel
              style={{height:"20px", marginTop: "4%"}}
              control={
                <Checkbox
                  checked={state.subjectNumbers}
                  onChange={handleChange}
                  name="subjectNumbers"
                  color="primary"
                  size="small"
                />
              }
              label={
                <Typography
                  style={ typographyCheckbox }
                  color="primary"
                  component="p"
                  variant="p">
                    Numbers
                </Typography>
              }
            />
            <FormControlLabel
              style={{height:"20px", marginTop: "4%"}}
              control={
                <Checkbox
                  checked={state.subjectColors}
                  onChange={handleChange}
                  name="subjectColors"
                  color="primary"
                  size="small"
                />
              }
              label={
                <Typography
                  style={ typographyCheckbox }
                  color="primary"
                  component="p"
                  variant="p">
                    Colors
                </Typography>
              }
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
              style={{height:"20px", marginTop: "4%"}}
              control={
                <Checkbox
                  checked={state.typeMemory}
                  onChange={handleChange}
                  name="typeMemory"
                  color="primary"
                  size="small"
                />
              }
              label={
                <Typography
                  style={ typographyCheckbox }
                  color="primary"
                  component="p"
                  variant="p">
                    Memory
                </Typography>
              }
            />
            <FormControlLabel
              style={{height:"20px", marginTop: "4%"}}
              control={
                <Checkbox
                  checked={state.typeSorting}
                  onChange={handleChange}
                  name="typeSorting"
                  color="primary"
                  size="small"
                />
              }
              label={
                <Typography
                  style={ typographyCheckbox }
                  color="primary"
                  component="p"
                  variant="p">
                    Sorting
                </Typography>
              }
            />
            <FormControlLabel
              style={{height:"20px", marginTop: "4%"}}
              control={
                <Checkbox
                  checked={state.typePuzzle}
                  onChange={handleChange}
                  name="typePuzzle"
                  color="primary"
                  size="small"
                />
              }
              label={
                <Typography
                  style={ typographyCheckbox }
                  color="primary"
                  component="p"
                  variant="p">
                    Puzzle
                </Typography>
              }
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
              style={{height:"20px", marginTop: "4%"}}
              control={
                <Checkbox
                  checked={state.gradeOne}
                  onChange={handleChange}
                  name="gradeOne"
                  color="primary"
                  size="small"
                />
              }
              label={
                <Typography
                  style={ typographyCheckbox }
                  color="primary"
                  component="p"
                  variant="p">
                    Pre-school
                </Typography>
              }
            />
            <FormControlLabel
              style={{height:"20px", marginTop: "4%"}}
              control={
                <Checkbox
                  checked={state.gradeTwo}
                  onChange={handleChange}
                  name="gradeTwo"
                  color="primary"
                  size="small"
                />
              }
              label={
                <Typography
                  style={ typographyCheckbox }
                  color="primary"
                  component="p"
                  variant="p">
                    Pre-Kindergarten
                </Typography>
              }
            />
            <FormControlLabel
              style={{height:"20px", marginTop: "4%"}}
              control={
                <Checkbox
                  checked={state.gradeThree}
                  onChange={handleChange}
                  name="gradeThree"
                  color="primary"
                  size="small"
                />
              }
              label={
                <Typography
                  style={ typographyCheckbox }
                  color="primary"
                  component="p"
                  variant="p">
                    Kindergarten
                </Typography>
              }
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
              style={{height:"20px", marginTop: "4%"}}
              control={
                <Checkbox
                  checked={state.levelEasy}
                  onChange={handleChange}
                  name="levelEasy"
                  color="primary"
                  size="small"
                />
              }
              label={
                <Typography
                  style={ typographyCheckbox }
                  color="primary"
                  component="p"
                  variant="p">
                    Easy
                </Typography>
              }
            />
            <FormControlLabel
              style={{height:"20px", marginTop: "4%"}}
              control={
                <Checkbox
                  checked={state.levelMedium}
                  onChange={handleChange}
                  name="levelMedium"
                  color="primary"
                  size="small"
                />
              }
              label={
                <Typography
                  style={ typographyCheckbox }
                  color="primary"
                  component="p"
                  variant="p">
                    Medium
                </Typography>
              }
            />
            <FormControlLabel
              style={{height:"20px", marginTop: "4%"}}
              control={
                <Checkbox
                  checked={state.levelHard}
                  onChange={handleChange}
                  name="levelHard"
                  color="primary"
                  size="small"
                />
              }
              label={
                <Typography
                  style={ typographyCheckbox }
                  color="primary"
                  component="p"
                  variant="p">
                    Hard
                </Typography>
              }
            />
          </div>
        </div>
        <div>
          <Typography
            style={ typographyTitle }
            color="primary"
            component="p"
            variant="p">
            Creation Date
          </Typography>
          <FormControlLabel
            style={{height:"20px", marginTop: "4%"}}
            control={
              <Checkbox
                checked={state.date}
                onChange={handleChange}
                name="date"
                color="primary"
                size="small"
              />
            }
            label={
              <Typography
                style={ typographyCheckbox }
                color="primary"
                component="p"
                variant="p">
                  Recent to old
              </Typography>
            }
          />
        </div>
      </FormGroup>
  );
}