import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

const emptyEvent = {
  title: "",
  description: "",
  date: "",
  tags: []
};
class Form extends React.Component {
  state = {
    event: emptyEvent
  };

  componentWillReceiveProps() {
    this.setState({
      event: this.props.selectedEvent || emptyEvent
    });
  }

  handleChange = evt => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = [evt.target.value];
    this.setState({
      event: newEvent
    });
  };

  onSubmitHandler = evt => {
    evt.preventDefault();
    this.props.eventCreator(this.state.event);
    this.setState({
      event: emptyEvent
    });
  };

  render() {
    return (
      <React.Fragment>
        <form noValidate autoComplete="off" onSubmit={this.onSubmitHandler}>
          <Grid container spacing={8} style={{ width: "70%", margin: "auto" }}>
            <Grid item xs={12}>
              <TextField
                id="title"
                label="Title"
                placeholder="Please enter your title"
                margin="normal"
                name="title"
                value={this.state.event && this.state.event.title}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="description"
                label="Description"
                placeholder="Please enter your description"
                multiline
                margin="normal"
                variant="outlined"
                name="description"
                value={this.state.event && this.state.event.description}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="date"
                label="Date"
                placeholder="date"
                margin="normal"
                name="date"
                type="date"
                value={this.state.event && this.state.event.date}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="tag"
                label="tag"
                placeholder="tag"
                margin="normal"
                name="tags"
                type="tags"
                value={this.state.event && this.state.event.tag}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ margin: "30px" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
