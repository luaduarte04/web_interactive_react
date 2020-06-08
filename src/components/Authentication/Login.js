import React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Grid,
  Box,
  Typography,
  makeStyles,
  Container }from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import {
  Link
} from "react-router-dom";

import Copyright from "./Copyright";


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
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {
  const classes = useStyles();

  const handleLogging = (event) => {
    event.preventDefault();
    console.log("event", event.target.email.value)
    console.log("event2", event.target.password.value)
    props.setUser(event.target.email.value)
  }
  
  const linkStyle = {
    color: "grey",
    textDecoration: "none"
  }

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate onSubmit={ handleLogging }>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
            <Grid container justify="space-between">
              <Grid item>
                <Link to="/ResetPassword" style={linkStyle} variant="body2">
                  Forgot Password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/Register" style={linkStyle} variant="body2">
                  Don't have an account? Register
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
  );
}