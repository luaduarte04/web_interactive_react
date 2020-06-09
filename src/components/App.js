import React, { useState } from 'react';
import './App.css';

// import Authentication from "./Authentication/Authentication";
import Navbar from "./Navbar/Navbar";
import Navitem from "./Navbar/Navitem";
import DropdownMenu from "./Navbar/DropdownMenu";

import Register from "./Authentication/Register";
import Login from "./Authentication/Login";
import ResetPassword from "./Authentication/ResetPassword";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  const [ user, setUser ] = useState("");

  // function to retrieve first name from database
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [user])

  return (
    <Router>
      <Navbar user={ user } setUser={ setUser } />

      <Switch>
      <Route path="/home">
          <Register />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Login">
          <Login setUser={ setUser } />
        </Route>
        <Route path="/ResetPassword">
          <ResetPassword />
        </Route>
      </Switch>
    </Router>
  );
}

// STUFF THAT I NEED TO DO:
  // 1 - when logged in show users first name
  // 2 - when logged in go to my games page
  // 3 - add setup game to dropdown
  // 4 - prevent dropdown to pop when logged in for first time
  // 5 - use first name for dropdown
