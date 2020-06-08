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

    return (
      <Router>
        <Navbar user={ user } />

      
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

// structure:
// a navbar component that takes two items:
  // logo - link to home
  // login:
    // if logout shows login or register
    // if login shows user name "Hi, Clara" which is a dropdown
      // dropdown shows link to games page and user name