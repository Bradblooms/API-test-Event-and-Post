import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

class Home extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={24} style={{ padding: "14px" }}>
          <div style={{ width: "80%", margin: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "300px",
                margin: "auto",
                backgroundImage: `url(https://compass-ssl.xbox.com/assets/59/91/59914d88-e694-416d-90ff-69dbd55996ef.jpg?n=64728194_GLP-Page-Hero-1084_1920x600.jpg)`,
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea animi
              facilis error veniam optio culpa quod unde maxime quasi non facere
              sunt praesentium assumenda accusantium, voluptates perspiciatis
              aut minima inventore.
            </p>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Home;
