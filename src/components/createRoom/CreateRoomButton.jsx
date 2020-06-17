import React from "react";

import {
  Button,
  makeStyles,
} from '@material-ui/core';

import {
  useParams,
  useHistory
} from "react-router-dom";
import {Redirect} from "react-router"

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CreateRoomButton({getURL}){
  const classes = useStyles();

  const history = useHistory();
    let id = useParams();
    function generateRandomLink() {
      getURL()
      .then(res => {
        if(res) {
          const link = res.url;
          console.log("Link:", link)
          history.push(`/classroom/${link}`)
        } else {
          history.push("/login")
        }
      })
      .catch(err => console.log(err))
    }
    return (
      // <button
      //   className={""}
      //   onClick={() => generateRandomLink()}
      // >
      //   {"Create Room"}
      // </button>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={() => generateRandomLink()}
      >
        START NEW CLASSROOM
      </Button>
    );
}
// export default withRouter(CreateRoomButton)