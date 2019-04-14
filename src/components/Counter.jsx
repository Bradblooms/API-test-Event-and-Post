import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <Button variant="contained" color="default" p={2}>
          Increment
        </Button>
        <Button p="2" mx="auto" variant="contained" color="secondary">
          Delete
        </Button>
      </React.Fragment>
    );
  }
}

export default Counter;
