import React, { Component } from "react";
import EventBrite from "./EventBrite";
import Grid from "@material-ui/core/Grid";

class EventBriteAll extends Component {
  render() {
    return (
      <Grid container spacing={24} style={{ padding: 24 }}>
        <Grid item xs={12} sm={4} lg={4} xl={3}>
          <EventBrite />
        </Grid>
      </Grid>
    );
  }
}

export default EventBriteAll;
