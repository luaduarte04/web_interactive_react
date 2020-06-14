import React from 'react';
import {
  Toolbar,
  Link,
  MenuItem,
  Menu,
  Typography,
  makeStyles,
  AppBar } from '@material-ui/core';

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
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
          <Toolbar>
            <li><Link href="/" style={{ textDecoration: 'none' }} variant="h6" className={classes.title} color="inherit">
              Interactive Classroom
            </Link></li>
            <Typography>
              <Link href="/Login" variant="body2" color="inherit" label={auth ? 'Logout' : 'Login'}>
                Login
              </Link>
              {" | "}
              <Link href="/Register" variant="body2" color="inherit" label={auth ? 'Logout' : 'Login'}>
                Register
              </Link>
            </Typography>
            {auth && (
              <div>
                <Typography
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                  style={{cursor: 'pointer'}}
                >
                  Hi, Clara
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
                  <MenuItem onClick={handleClose}>Name</MenuItem>
                  <MenuItem onClick={handleClose}>My Games</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
  );
}
