import React from 'react';
import {
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Typography,
  makeStyles,
  Select,
  AppBar
} from '@material-ui/core';

import {
  Link
} from "react-router-dom";

// import Authentication from "./Authentication/Authentication";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  // const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none"
  }

  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/home" style={linkStyle} className={classes.title} color="inherit">
              <Typography variant="h6" color="inherit" >
                Interactive Classroom
              </Typography>
            </Link>
            {!props.user && (
              <Typography variant="body2" color="inherit" >
                <Link to="/Login" style={linkStyle} label={props.user ? 'Logout' : 'Login'}>
                  Login
                </Link>
                {" | "}
                <Link to="/Register" style={linkStyle} label={props.user ? 'Logout' : 'Login'}>
                  Register
                </Link>
              </Typography>
            )}
            {props.user && (
              <div>
                <Typography
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                  style={{cursor: 'pointer'}}
                >
                  Hi, { props.user }
                </Typography>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <Typography align="center">Name</Typography>
                  <MenuItem onClick={handleClose}>My Games</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
  );
}