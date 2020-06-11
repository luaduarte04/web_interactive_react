import React, { useState } from 'react';
import Navbar from "./Navbar/Navbar";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";
import Logout from "./Authentication/Logout";
import ResetPassword from "./Authentication/ResetPassword";
import HomePage from "./HomePage/HomePage";
import MyGames from "./MyGames/MyGames"
import Copyright from "./Authentication/Copyright";
import './App.css';
import { Switch, Route } from "react-router-dom";

export default function App() {
  const [ user, setUser ] = useState("");

  return (
    <React.Fragment>
      <Navbar user={user}/>
      <Switch>
        <Route path="/Home">
         <HomePage />
        </Route>
        <Route path="/MyGames">
         <MyGames />
        </Route>
        <Route path="/Register">
          <Register setUser={setUser}/>
        </Route>
        <Route path="/Login">
          <Login setUser={setUser}/>
        </Route>
        <Route path="/ResetPassword">
          <ResetPassword />
        </Route>
        <Route path="/Logout">
          <Logout setUser={setUser} />
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
