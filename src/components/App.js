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
import CreateNewGame from "./createNewGame/CreateNewGame"

import { Switch,Route } from "react-router-dom";

export default function App() {
  const loggedIn = JSON.parse(sessionStorage.getItem('username')) === undefined ? null : JSON.parse(sessionStorage.getItem('username')) ; 
  const [ user, setUser ] = useState( loggedIn || null);

  
  return (
    <React.Fragment>
      <Navbar user={user}/>
      <Switch>
        <Route exact path="/">
         <HomePage user={user} />
        </Route>
        <Route exact path="/MyGames">
         <MyGames user={user}/>
        </Route>
        <Route exact path="/Register">
          <Register user={user}setUser={setUser}/>
        </Route>
        <Route exact  path="/Login">
          <Login user={user} setUser={setUser}/>
        </Route>
        <Route exact path="/ResetPassword">
          <ResetPassword />
        </Route>
        <Route exact path="/Logout">
          <Logout setUser={setUser} />
        </Route>
        <Route exact path="/teacher/room/:id">
          {/* <h1>HELLO</h1> */}
          <ClassRoom user={user} isTeacher={true} checkRoomExistance={checkRoomExistance} />
        </Route>
        <Route exact path="/teacher/:id">
          <CreateRoomButton getURL={getURL}/>
            {/* <ClassRoom wss={wss}/> */}
        </Route>
        <Route exact path="/newgame">
          <CreateNewGame user={user}/>
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

// HOME:
  // LUANA:
    // 1 - maybe do a footer or fix copywrite
    // 2 - maybe make images have some effect
    // 3 - responsive

// REGISTER
  // NEIHY:
    // 1 - when user exists if try to register break page.

// MYGAMES Page:
  // 1 - Dropdown pops randomly
  // 2 - FILTER = not implemented
  // 3 - SELECT GAME CHECKBOX = not implemented
  // 4 - COPY / SHARE BUTTON = not working
        // (function is logging error. link need to be send to input value)
  // 5 - EDIT = take you to newgame page but does not keep the props.
        // ex: title, level, ...
  // 6 - DELETE = not implemented
  // 7 - START NEW CLASSROOM BUTTON = it is working indepently of game list (hard coded game)
  // 8 - responsive

// CLASSROOM
  // 1 - COPY SHARE LINK BUTTON - not implemented
  // 2 - LEAVE ROOM BUTTON - not working

  // EXTRA CSS
    // 1 - highlight when a student is selected for the turn
    // 2 - color for each student so when they turn right the color will border the img
    // 3 - "yay you complete!" message when a game is over
    // 4 - responsive

// STUDENT VIEW PAGE
  // 1 - How do i access it now?

// ENDED SESSION PAGE
  // 1 - How do i access it now?
