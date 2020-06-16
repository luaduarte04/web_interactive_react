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
import CreateRoomButton from "./createRoom/CreateRoomButton"
import {getURL, checkRoomExistance} from "../helpers/newRoomHelper"

import { Switch,Route } from "react-router-dom";

export default function App() {
  const loggedIn = JSON.parse(sessionStorage.getItem('username'));
  const [ user, setUser ] = useState( loggedIn || null);

  return (
    <React.Fragment>
      <Navbar user={user}/>
      <Switch>
        <Route exact path="/">
         <HomePage />
        </Route>
        <Route exact path="/MyGames">
         <MyGames user={user}/>
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
        <Route exact path="/teacher/:id">
          <CreateRoomButton getURL={getURL}/>
            {/* <ClassRoom wss={wss}/> */}
        </Route>
        <Route exact path="/classroom/:id">
          <ClassRoom  user={user}  checkRoomExistance={checkRoomExistance} />
        </Route>
      </Switch>
      <Copyright />
    </React.Fragment>
  );
}
// {new WebSocket('ws://localhost:12345')}
// const wss = new WebSocket('ws://localhost:12345');

// AUTHENTICATION AND MENU:
  // 1 - when logged in show users first name
  // 4 - prevent dropdown to pop when logged in for first time
  // 5 - use first name for dropdown
