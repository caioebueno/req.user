/* eslint-disable no-unused-vars */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Signup from "./components/signup";
import Login from "./components/login"
import Main from "./components/main"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
