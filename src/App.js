import React, { Component } from "react";

import UserList from "./components/UserList";
import Home from "./components/Home";
import CourseList from "./components/CourseList";
import NavBar from "./components/NavBar";
import Facebook from "./components/Facebook";
import EventBrite from "./components/EventBrite";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import EventDashboard from "./components/EventDashboard";
import DisplayPosts from "./components/DisplayPosts";

import "./index.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/CourseList" component={CourseList} />
          <Route exact path="/EventBrite" component={EventBrite} />
          <Route exact path="/UserList" component={UserList} />
          <Route exact path="/Facebook" component={Facebook} />
          <Route exact path="/myEvents" component={EventDashboard} />
          <Route exact path="/displayPosts" component={DisplayPosts} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
