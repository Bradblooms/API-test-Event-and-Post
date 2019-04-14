import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import * as contentful from "contentful";
import Course from "../components/Course";
import Grow from "@material-ui/core/Grow";

const SPACE_ID = "t1l5e4f53jbw";
const ACCESS_TOKEN =
  "3f34b783db120f8a642dca639db9b3ca5949ac89882c8e9824c78fba3bd7d1d7";

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

class CourseList extends Component {
  state = {
    myReactShop: [],
    searchString: ""
  };
  constructor() {
    super();
    this.getCourses();
  }

  getCourses = () => {
    client
      .getEntries({
        content_type: "myReactShop",
        query: this.state.searchString
      })
      .then(response => {
        this.setState({ myReactShop: response.items });
      })
      .catch(error => {
        console.log("error accured while fetchin date");
        console.log(error);
      });
  };

  onSearchInputChange = event => {
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: "" });
    }
    this.getCourses();
  };

  render() {
    return (
      <div>
        {this.state.myReactShop ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="search courses"
              margin="normal"
              onChange={this.onSearchInputChange}
            />
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.myReactShop.map(currentCourse => (
                <Grow in={true} timeout={1000}>
                  <Grid
                    key={currentCourse.id}
                    item
                    xs={12}
                    sm={4}
                    lg={3}
                    xl={3}
                  >
                    <Course myReactShop={currentCourse} />
                  </Grid>
                </Grow>
              ))}
            </Grid>
          </div>
        ) : (
          "No Game Found"
        )}
      </div>
    );
  }
}

export default CourseList;
