import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";

class EventListItem extends Component {
  render() {
    const { event, onEventEdit } = this.props;
    return (
      <React.Fragment>
        <Grow in={true} timeout={1000}>
          <Card>
            <h3 style={{ padding: "20px" }}>{event.title}</h3>

            <img
              src={event.photoUrl && event.photoUrl}
              alt={event.id && event.id}
              height="300px"
              style={{ margin: "auto" }}
            />

            <CardContent>
              <p>{event.description && event.description}</p>

              {event.tags &&
                event.tags.map(tag => <small key={tag}>#{tag} </small>)}
            </CardContent>
            <CardActions>
              <button onClick={onEventEdit(event)}>View</button>
            </CardActions>
          </Card>
        </Grow>
      </React.Fragment>
    );
  }
}

export default EventListItem;
