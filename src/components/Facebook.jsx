import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
class Facebook extends Component {
  state = {
    isLogedin: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
    console.log(response);
    this.setState({
      isLogedin: true,
      userID: response.id,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };
  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.state.isLogedin) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h3>Welcome {this.state.name}</h3>
          <p>Email: {this.state.email}</p>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="297166434531245"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return (
      <div>
        <h6 style={{ textAlign: "center", marginTop: "50px" }}>
          Facebook Login System
        </h6>
        <div style={{ textAlign: "center" }}>{fbContent}</div>
      </div>
    );
  }
}

export default Facebook;
