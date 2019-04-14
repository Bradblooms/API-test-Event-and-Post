import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Grids from "./Grids";
import Counter from "./Counter";

class UserList extends Component {
  render() {
    const user1 = {
      name: "James",
      age: 30,
      hobbies: ["painting", "running", "coding"],
      img: "https://randomuser.me/api/portraits/women/90.jpg"
    };
    const user2 = {
      name: "Madison",
      age: 21,
      hobbies: ["yoga", "swimming", "ballet"],
      img: "https://randomuser.me/api/portraits/women/55.jpg"
    };
    return (
      <div className="App">
        <div className="containerC">
          <Grid container spacing={8} zeroMinWidth>
            <Grid item xs={12} sm={6}>
              <Grids name={"james"} user={user1} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grids user={user2} />
            </Grid>
          </Grid>

          <Counter />
        </div>
      </div>
    );
  }
}

export default UserList;
