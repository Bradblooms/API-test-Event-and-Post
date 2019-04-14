import React, { Component } from "react";
import EventList from "./eventList/EventList";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Form from "./Form";
import Cuid from "cuid";
import Grow from "@material-ui/core/Grow";

const eventDashboard = [
  {
    id: 1,
    title: "Music For Fashion Movie",
    photoUrl: "https://source.unsplash.com/random/1200x600",
    date: "12/03/2019",
    tags: ["potography", "fashion", "futuristic"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi natus fugiat rem dolorum repudiandae optio adipisci laboriosam debitis voluptatibus! Nisi, aut sapiente odit maxime sed quam provident quas dolorem tenetur.",
    collaborators: [
      {
        id: 20,
        name: " Ann Bolton",
        photoUrl: ""
      }
    ]
  },
  {
    id: 2,
    title: "Theater Lighting",
    photoUrl: "https://source.unsplash.com/random/1205x600",
    date: "12/03/2019",
    tags: ["Lighting", "Stage Design"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi natus fugiat rem dolorum repudiandae optio adipisci laboriosam debitis voluptatibus! Nisi, aut sapiente odit maxime sed quam provident quas dolorem tenetur.",
    collaborators: [
      {
        id: 7,
        name: " Bob Moses",
        photoUrl: ""
      },
      {
        id: 20,
        name: " Ann Bolton",
        photoUrl: ""
      }
    ]
  }
];

class EventDashboard extends Component {
  state = {
    events: eventDashboard,
    isOpen: false,
    selectedEvent: null
  };

  handelFromOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      selectedEvent: null
    });
  };
  handelEditEvent = eventToUpdate => () => {
    this.setState({
      selectedEvent: eventToUpdate,
      isOpen: true
    });
    //console.log(this.state.selectedEvent);
  };

  eventCreator = newEvent => {
    newEvent.id = Cuid();
    newEvent.photoUrl = "https://source.unsplash.com/random/1203x600";
    const updateEvents = [newEvent, ...this.state.events];
    this.setState({
      events: updateEvents,
      selectedEvent: null
    });
    console.log(this.state.event);
  };
  render() {
    return (
      <div>
        <Grid container spacing={8} style={{ width: "70%", margin: "auto" }}>
          <Grid item xs={8}>
            <EventList
              onEventEdit={this.handelEditEvent}
              events={this.state.events}
            />
          </Grid>

          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "30px" }}
              onClick={this.handelFromOpen}
            >
              Add Colaboration
            </Button>

            <Grow in={this.state.isOpen} timeout={1000}>
              <Grid item xs={12}>
                <Form
                  selectedEvent={this.state.selectedEvent}
                  eventCreator={this.eventCreator}
                />
              </Grid>
            </Grow>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default EventDashboard;
