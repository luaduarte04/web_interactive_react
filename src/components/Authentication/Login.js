import React, {useState } from 'react';
import authTeacher from "../../hooks/authTeacher";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  makeStyles,
  Container }from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  Link, 
  useHistory
} from "react-router-dom";


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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  let history = useHistory();
  if (props.user){
    history.push('/myGames')
  }
  const { doRequest, errors } = authTeacher({
    url: 'http://localhost:3001/login',
    method: 'post',
    body: {
      email, password
    },
    onSuccess: () => history.push("/MyGames")
  })

  const handleLogging = async (event) => {
    event.preventDefault();
    let isError = false;
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!pattern.test(email)) {
      isError = true;
      setError(true);
      setErrorMessage({...setErrorMessage, email: "please enter a valid email"});
    } else if(password.length < 5){
      isError = true;
      setError(true);
      setErrorMessage({...setErrorMessage, password: "password need at least five characters"});
    }
    if (!isError) {
      isError = false;
      setError(false);
      setErrorMessage({});
      const response = await doRequest();
      response === undefined || sessionStorage.setItem('username', JSON.stringify(response));
      props.setUser(response || null);
    }
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
                  error={!!errorMessage.email}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  type="email"
                  value={email}
                  onChange = {event => setEmail(event.target.value)}
                  helperText = {errorMessage.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!!errorMessage.password}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange = {event => setPassword(event.target.value)}
                  helperText = {errorMessage.password}
                />
              </Grid>
            </Grid>
            {errors && <p>Incorrect email or password!</p>}
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
      </Container>
  );
}