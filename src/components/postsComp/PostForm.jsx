import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  handelFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handelSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  render() {
    return (
      <div>
        <h3>Add Post</h3>
        <form onSubmit={this.handelSubmit}>
          <div>
            <label>Title: </label>
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handelFormChange}
            />
          </div>
          <div>
            <label>Body: </label>
            <input
              name="body"
              type="body"
              value={this.state.body}
              onChange={this.handelFormChange}
            />
          </div>
          <div>
            <button type="submit">add post</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
