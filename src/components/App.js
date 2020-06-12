import React, { useState } from 'react';
import Navbar from "./Navbar/Navbar";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";
import Logout from "./Authentication/Logout";
import ResetPassword from "./Authentication/ResetPassword";
import Copyright from "./Authentication/Copyright";
import ClassRoom from "./game/ClassRoom"

import HomePage from "./HomePage/HomePage";
import MyGames from "./MyGames/MyGames"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import './App.css';


// const WebSocket = require("ws");
// const wss = new WebSocket.Server('ws://www.localhost.com/8080');
export default function App() {
  const [ user, setUser ] = useState("");
  const wss = new WebSocket('ws://localhost:12345');

  return (
    <React.Fragment>
      <Navbar user={user}/>
      <Switch>
        <Route exact path="/">
         <HomePage />
        </Route>
        <Route exact path="/MyGames">
         <MyGames />
        </Route>
        <Route exact path="/Register">
          <Register setUser={setUser}/>
        </Route>
        <Route exact path="/Login">
          <Login setUser={setUser}/>
        </Route>
        <Route exact path="/ResetPassword">
          <ResetPassword />
        </Route>
        <Route exact path="/Logout">
          <Logout setUser={setUser} />
        </Route>
        <Route exact path="/teacher">
            <ClassRoom wss={wss}/>
          </Route>
      </Switch>
      <Copyright />
    </React.Fragment>
  );
}

// AUTHENTICATION AND MENU:
  // 1 - when logged in show users first name
  // 4 - prevent dropdown to pop when logged in for first time
  // 5 - use first name for dropdown
