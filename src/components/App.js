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
  // 1 - maybe do a footer or fix copywrite

// MYGAMES Page:
  // 1 - implement delete

// CLASSROOM:
  // 1 - highlight when a student is selected for the turn
  // 2 - maybe designate a color for each student so when they turn right the color will border the img
  // 3 - "yay you complete!" message when a game is over
  // 
