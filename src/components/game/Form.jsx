import React, {useState} from "react";

import {
  makeStyles,
  TextField,
  Typography,
  Container,
  Grid,
  Avatar
} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';

import Button from "./Button"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function Form(props) {
  const classes = useStyles();
  // const {name, interviewers, interviewer, onSave, onCancel} = props
  let [name, setName] = useState("");
    
  return (
    <>
      <Container component="main" maxWidth="xs">
        <section className={classes.paper}>
            <Avatar className={classes.avatar}>
              <FaceIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Enter Your Student Name
            </Typography>
          <form
            className={classes.form}
            autoComplete="off"
            onSubmit={event => {event.preventDefault(); props.onSave(name)}}
          >
            <div style={{width:"100%"}}>
              <TextField
                fullWidth={true}
                id="outlined-basic"
                label="Student Name"
                variant="outlined"
                name="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                data-testid="student-name-input"
              />
              </div>
            {/* <div>
              <input
                className="appointment__create-input text--semi-bold"
                name="name"
                type="text"
                placeholder="Enter Student Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                data-testid="student-name-input"
              />
            </div> */}
            <Button
              onClick={() => props.onSave(name)}
            >
              Enter Room
            </Button>
          </form>            
        </section>
      </Container>
    </>
  )
}