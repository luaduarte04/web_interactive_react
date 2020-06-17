import React, {useState} from 'react';
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

const linkStyle = {
  color: "grey",
  textDecoration: "none"
}

export default function Register(props) {
  const classes = useStyles();
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState("https://i.imgur.com/LpaY82x.png");
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  let history = useHistory();
  if (props.user){
    history.push('/myGames')
  }
  const { doRequest, errors } = authTeacher({
    url: 'http://localhost:3001/register',
    method: 'post',
    body: {
      first_name, last_name, email, avatar, password
    }, 
    onSuccess: () => history.push("/MyGames")
  })

  const handleRegistration = async (event) => {
    event.preventDefault();
    let isError = false;
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            
    if (first_name.length < 2) {
      isError = true;
      setError(true);
      setErrorMessage({...setErrorMessage, first_name: "first Name is too small"});
    } else if (last_name.length < 2) {
      isError = true;
      setError(true);
      setErrorMessage({...setErrorMessage, last_name: "last Name is too small"});
    } else if (!pattern.test(email)) {
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
      props.setUser(response);
      // history.push("/MyGames")
    }
  }

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} noValidate onSubmit={ handleRegistration }>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={!!errorMessage.first_name}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={first_name}
                  onChange = {event => setFirstName(event.target.value)}
                  helperText = {errorMessage.first_name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={!!errorMessage.last_name}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={last_name}
                  onChange = {event => setLastName(event.target.value)}
                  helperText = {errorMessage.last_name}
                />
              </Grid>
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
            {errors}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="center">
              <Grid item>
                <Link to="/Login" style={linkStyle} variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
  );
}