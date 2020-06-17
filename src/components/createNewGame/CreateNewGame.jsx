import React,{useState} from 'react'

import {
  makeStyles,
  Typography,
  Button,
  TextField,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
} from '@material-ui/core';

import useNewGameData from "../../hooks/newGame"
import {useHistory} from "react-router-dom"
import './CreateNewGame.scss';

const useStyles = makeStyles((theme) => ({
  input: {
    width: "80%",
    height: "auto",
    marginBottom: "3%",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  formControl: {
    // minWidth: 120,
    width: "80%",
    marginBottom: "3%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  gameSettingTitle: {
    color: "white",
    backgroundColor: "#3f51b5",
    textAlign: "center",
    width: "100%",
    height: "auto",
    padding: "2px 0px 0px 10px",
    marginBottom: "3%",
  },
  imgLabel: {
    color: "#3f51b5",
    fontWeight: "bolder",
    fontSize: "0.5em",
  }
}));

export default function CreateNewGame({user}) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  // const [levels, setLevels] = useState(1);
  const [input, setInput] = useState(["image 1 url", "image 2 url","image 3 url","image 4 url"])
  const history = useHistory();
  if (!user) {
    history.push('/login')
  }
  function appendInput(number) {
    let inputCount = 0;
    if (number === 1) inputCount = 4;
    if (number === 2) inputCount = 6;
    if (number === 3) inputCount = 8;
    let newInput =[]
    for (let i = 0; i < inputCount; i++) {
      newInput.push(`image ${i+1} url`)
    }
    setInput(newInput);
  }
  function extractData() {
    let form = document.getElementById('create-form');
    const formData = new FormData(form);
    const data = {
      title:formData.get("title"),
      description:formData.get("description"),
      subject:formData.get("subject"),
      type:formData.get("type"),
      grade:formData.get("grade"),
      level:formData.get("level")
    };
    const images = [];
    for (const image of input) {
      images.push(formData.get(image))
    }  
    data["images"] = images;
    saveNewGame(data)
    .then(() => history.push('/MyGames'))
  
  }
  const {
    state,
    saveNewGame
  } = useNewGameData();

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <div className="super-div-create-game">
      <form
        className="create-game-container"
        id="create-form"
        onSubmit={event =>{ event.preventDefault();extractData()}}
      >
        <div className="game-configuration-form">
          <Typography
            className={classes.gameSettingTitle}
            style={{ fontWeight: 'bold'}}
            color="primary"
            component="h6"
            variant="h6"
          >
            Game Settings
          </Typography>
          
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Game Title"
            variant="outlined"
            name="title"
            type="text"
            required
            size="small"
            style={{ marginTop: "15%" }}
            // value={title}
            // onChange={(event) => setName(event.target.value)}
          />
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Game Description"
            variant="outlined"
            name="description"
            type="text"
            required
            size="small"
            // value={title}
            // onChange={(event) => setName(event.target.value)}
          />
          {state.grades &&
            <FormControl
              size="small"
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel id="demo-simple-select-outlined-label">Grade</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // value={age}
                // onChange={handleChange}
                name="grade"
                label="Grade"
              >
                {state.grades.map((item) =>
                  <MenuItem key={item.id} value = {item.id}>
                    {item.name}
                  </MenuItem>
                )}
              </Select>
            </FormControl>
          }
          
          {state.subjects &&
            <FormControl
              size="small"
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel id="demo-simple-select-outlined-label">Subject</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // value={age}
                // onChange={handleChange}
                name="subject"
                label="Subjects"
              >
                {state.subjects.map((item) =>
                  <MenuItem key={item.id} value = {item.id}>
                    {item.name}
                  </MenuItem>
                )}
              </Select>
            </FormControl>
          }

          {state.types &&
            <FormControl
              size="small"
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel id="demo-simple-select-outlined-label">Types</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="type"
                // value={age}
                // onChange={handleChange}
                label="Types"
              >
                {state.types.map((item) =>
                  <MenuItem key={item.id} value = {item.id} required>
                    {item.name}
                  </MenuItem>
                )}
              </Select>
            </FormControl>
          }

          {state.levels &&
            <FormControl
              size="small"
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel id="demo-simple-select-outlined-label">Level</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // value={age}
                // onChange={handleChange}
                name="level"
                onChange={(e)=> appendInput(parseInt(e.target.value))}
                label="level"
              >
                {state.levels.map((item) =>
                  <MenuItem key={item.id} value = {item.id}>
                    {item.name}
                  </MenuItem>
                )}
              </Select>
            </FormControl>
          }
        
          <Button
            type="submit"
            value="Submit"
            style={{ marginTop: "20%", marginBottom: "10%" }}
            color="primary"
            variant="contained"
            size="large"
          >
            Submit
          </Button>
        </div>
          <div className="game-load-img-container" >
            <Typography
              className={classes.gameSettingTitle}
              style={{ fontWeight: 'bold'}}
              color="primary"
              component="h6"
              variant="h6"
            >
              Images
            </Typography>
            <div className="url-div-container" id="dynamicInput">
              {input.map(input => {
                return (<>
                  <div className="img-box">
                    <div className="url-div-container-input">
                      <InputLabel
                        for={input}
                        id="demo-simple-select-outlined-label"
                        className={classes.imgLabel}
                      >
                        {input}
                      </InputLabel>
                    </div>

                    <TextField
                      key={input}
                      type="text"
                      id={input}
                      name={input}
                      required
                      label="Paste your image link here"
                      variant="outlined"
                      fullWidth
                      size="small"
                      // value={title}
                      // onChange={(event) => setName(event.target.value)}
                    />
                  </div>
                </>)
              })}
            </div>
          </div>
      </form>
    </div>
  );
}



// {state.grades &&
//   <select name = "grade">
//     {state.grades.map((item) =>

//       <option key={item.id} value = {item.id}>
//         {item.name}
//       </option>
//     )}
//   </select>
// }

// {state.types&&
//   <select name = "type">
//     {state.types.map((item) =>

//       <option key={item.id} value = {item.id}>
//         {item.name}
//       </option>
//     )}
//   </select>
// }

// {state.levels&& 
//   <select name = "level" onChange={(e)=> appendInput(parseInt(e.target.value))}>
//     {state.levels.map((item) =>

//       <option key={item.id} value = {item.id}>
//         {item.name}
//       </option>
//     )}
//   </select>
// }


{/* <div className="url-div-container" id="dynamicInput">
              {input.map(input => {
                return (<>
                  <label for={input}>{input}</label>
                  <input key={input} type="text" id={input} name={input} required />
                </>)
              })}
            </div> */}