import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import { CardHeader, CardContent } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

class Posts extends Component {
  state = {
    posts: [],
    isLoading: false
  };
  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data =>
        this.setState({
          posts: data,
          isLoading: true
        })
      );
  }

  render() {
    const { posts } = this.state;
    const postItems = posts.map(post => (
      <div className="eachGrid">
        <div style={{ padding: "15px" }}>
          <h4>{post.title}</h4>

          <CardContent>{post.body}</CardContent>
        </div>
      </div>
    ));
    const { isLoading } = this.state;
    if (!isLoading) {
      return (
        <div className="loading">
          <CircularProgress color="secondary" />
        </div>
      );
    } else {
      return (
        <div>
          <Grid container spacing={8} style={{ width: "90%", margin: "auto" }}>
            <Typography align="center">Posts</Typography>
            <br />
            <hr />
            <div className="gridLay">{postItems}</div>
          </Grid>
        </div>
      );
    }
  }
}

export default Posts;
