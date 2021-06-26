import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import BlogShow from "./components/BlogShow/BlogShow";
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

export const UserContext=createContext();


function App() {
  const [loggedInUser,setLoggedInUser]=useState(false);

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/blog/:id">
            <BlogShow/>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard/>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
