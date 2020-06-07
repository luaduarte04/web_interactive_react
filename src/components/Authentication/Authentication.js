import React from 'react';

import Register from "./Register";
import Login from "./Login";
import ResetPassword from "./ResetPassword";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Authentication() {
    return (
      <main>
        <Router>
          <Switch>
            <Route path="/Register">
              <Register />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/ResetPassword">
              <ResetPassword />
            </Route>
          </Switch>
        </Router>
      </main>
    );
}
