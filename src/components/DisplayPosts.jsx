import React, { Component } from "react";
import Posts from "./postsComp/Posts";
import PostFrom from "./postsComp/PostForm";

export default class DisplayPosts extends Component {



  render() {
    return (
      <div>
        <PostFrom />
        <hr />
        <Posts />
      </div>
    );
  }
}
