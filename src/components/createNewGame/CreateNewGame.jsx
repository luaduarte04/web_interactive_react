import React,{useState} from 'react'
import {
  makeStyles,
  Typography,
  Button,
  Avatar,
} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import useNewGameData from "../../hooks/newGame"
import {useHistory} from "react-router-dom"
import './CreateNewGame.scss';

// const useStyles = makeStyles((theme) => ({
//   selectPlayer: {
//     color: "white",
//     backgroundColor: "#3f51b5",
//     textAlign: "left",
//     width: "100%",
//     height: "auto",
//     padding: "2px 0px 0px 10px",
//     marginTop: "3%",
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
    
//   },
//   notRoomSessionTitle: {
//     color: "#3f51b5",
//     textAlign: "center",
//     fontSize: "2em",
//     marginTop: "20%",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.primary.main,
//   },
// }));

export default function CreateNewGame({user}) {
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
      newInput.push(`image url ${i+1}`)
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

  return (
    <form id="create-form"onSubmit={event =>{ event.preventDefault();extractData()}}>
      <label for="title">Title:</label>
      <input type="text"  name="title" required />
      <label for="description">Description:</label>
      <input type="text"  name="description" required />
      {state.grades &&
        <select name = "grade">
          {state.grades.map((item) =>

            <option key={item.id} value = {item.id}>
              {item.name}
            </option>
          )}
        </select>
      }
      {state.subjects&& 
        <select name = "subject">
          {state.subjects.map((item) =>

            <option key={item.id} value = {item.id}>
              {item.name}
            </option>
          )}
        </select>
      }
      {state.types&&
        <select name = "type">
          {state.types.map((item) =>

            <option key={item.id} value = {item.id}>
              {item.name}
            </option>
          )}
        </select>
      }
        {state.levels&& 
          <select name = "level" onChange={(e)=> appendInput(parseInt(e.target.value))}>
            {state.levels.map((item) =>

              <option key={item.id} value = {item.id}>
                {item.name}
              </option>
            )}
          </select>}
          <div id="dynamicInput">
            {input.map(input => {
              return (<>
                <label for={input}>{input}</label>
                <input key={input} type="text" id={input} name={input} required />
              </>)
            })}
          </div>
          <button type="submit" value="Submit">Submit</button>
      </form>
  );
}
