import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class NavBar extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="sticky" color="default">
          <Toolbar>
            <IconButton onClick={this.toggle} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              React Game Shop
            </Typography>
            <Link to="/">
              <MenuItem>Home</MenuItem>
            </Link>
            <Link to="/CourseList">
              <MenuItem>Game Shop</MenuItem>
            </Link>
            <Link to="/EventBrite">
              <MenuItem>Event Brite</MenuItem>
            </Link>
            <Link to="/UserList">
              <MenuItem>UserList</MenuItem>
            </Link>
            <Link to="/Facebook">
              <MenuItem>Facebook</MenuItem>
            </Link>
            <Link to="/myEvents">
              <MenuItem>My Events</MenuItem>
            </Link>
            <Link to="/displayPosts">
              <MenuItem>Posts</MenuItem>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;
