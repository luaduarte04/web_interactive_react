import React, {useState} from "react";

import {
  Button,
  makeStyles,
} from '@material-ui/core';

import {useParams} from "react-router-dom";
import {Redirect} from "react-router"

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CreateRoomButton({gameHistory, selected, getURL}){
  const classes = useStyles();
  const [error, setError] = useState()
  // const history = useHistory();
    let id = useParams();
    function startGame() {

      if (selected.length > 0){  
        setError("")
        getURL()
        .then(res => {
          if(res) {
            const link = res.url;
            console.log("Link:", link)
            gameHistory.push({pathname:`/classroom/${link}`,selected})
          } else {
            gameHistory.push("/login")
          }
        })
        .catch(err => console.log(err))
      } else {
        setError("Must selected atleast one game to start session")
      }
    }
    return (
      <>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => startGame()}
        >
          START NEW CLASSROOM
        </Button>
        {error && <p>{error}</p>}
      </>
    );
}
// export default withRouter(CreateRoomButton)