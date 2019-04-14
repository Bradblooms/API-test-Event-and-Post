import React, { Component } from "react";
import EventListItem from "./EventListItem";
import Grid from "@material-ui/core/Grid";

class EventList extends Component {
  render() {
    const { events, onEventEdit } = this.props;

    return (
      <div>
        <Grid container spacing={24}>
          {events.map(event => (
            <Grid key={event.id} item xs={12}>
              <EventListItem onEventEdit={onEventEdit} event={event} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
export default EventList;
