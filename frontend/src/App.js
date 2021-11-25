import React, { useEffect, useState } from "react";
import "./App.css";
import Chat from "./pages/chat/Chat";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

function App() {
  const user = useContext(AuthContext).user;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Chat /> : <Redirect to="/register" />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
