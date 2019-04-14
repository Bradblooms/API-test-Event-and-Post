import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

class Grids extends Component {
  state = {
    age: this.props.user.age
  };
  onMakeOlder = () => {
    this.setState({ age: this.state.age + 3 });
  };

  render() {
    return (
      <div className="App">
        <Grow in={true} timeout={1000}>
          <Paper>
            <div className="padding3">
              <Avatar
                alt={this.props.user.name}
                src={this.props.user && this.props.user.img}
                style={{
                  width: "140px",
                  height: "140px",
                  marginBottom: "20px"
                }}
              />
              <h3>{this.props.user && this.props.user.name}</h3>
              <p>Age: {this.state.age}</p>
              <ul>
                {this.props.user.hobbies &&
                  this.props.user.hobbies.map(hobby => <li>{hobby}</li>)}
              </ul>
              <Button
                onClick={this.onMakeOlder}
                variant="contained"
                color="primary"
              >
                Make me older!
              </Button>
            </div>
          </Paper>
        </Grow>
      </div>
    );
  }
}

export default Grids;
