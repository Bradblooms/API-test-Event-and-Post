import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grow from "@material-ui/core/Grow";

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%) !important;
  border-radius: 30px !important;
  border: 0 !important;
  color: white !important;
  height: 48px !important;
  padding: 0 30px !important;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  margin: 0 auto !important;
`;

class EventBrite extends Component {
  state = {
    isLoaded: false,
    persons: null,
    dataP: null,
    continuation: null,
    checked: true
  };

  /*async changeUrl(cont) {
    this.setState({
      url:
        "https://www.eventbriteapi.com/v3/events/?continuation=" +
        { cont } +
        "token=UVKZLFBK53U7TPW3VSYR"
    });
    const response = await fetch(this.state.url);
    const data = await response.json();
    this.setState({
      persons: data.events,
      isLoaded: true,
      dataP: data.pagination
    });
  }*/

  async componentDidMount() {
    const url =
      "https://www.eventbriteapi.com/v3/events/?continuation=eyJwYWdlIjogM30&token=UVKZLFBK53U7TPW3VSYR";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      persons: data.events,
      isLoaded: true
    });
  }
  render() {
    const { isLoaded, persons } = this.state;
    if (!isLoaded) {
      return (
        <div className="loading">
          <CircularProgress color="secondary" />
        </div>
      );
    } else {
      return (
        <div>
          <Grid container spacing={24} style={{ padding: 24 }}>
            {persons.map(person =>
              person.category_id > 0 ? (
                <Grow in={this.state.checked} timeout={1000}>
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    lg={3}
                    xl={3}
                    style={{ overflow: "hidden" }}
                    key={person.id}
                  >
                    <Card>
                      <a
                        href={person.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {person.logo ? (
                          <img
                            src={person.logo && person.logo.url}
                            alt="EventPhoto"
                          />
                        ) : (
                          <div style={{ height: "200px" }} />
                        )}
                      </a>
                      <CardContent>
                        <Typography variant="subtitle1" gutterBottom>
                          {person.name.text}
                        </Typography>

                        <Chip
                          style={{ marginLeft: " 13px" }}
                          label={person.start.timezone}
                          color="primary"
                          variant="outlined"
                        />
                        {person.is_free ? (
                          <Chip
                            style={{ marginLeft: " 13px" }}
                            label="Free"
                            color="secondary"
                            variant="outlined"
                          />
                        ) : null}
                      </CardContent>

                      <CardActions>
                        <StyledButton href={person.url} target="_blank">
                          More info ...
                        </StyledButton>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grow>
              ) : null
            )}
          </Grid>
        </div>
      );
    }
  }
}

export default EventBrite;
