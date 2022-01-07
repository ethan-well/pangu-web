import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogin } from "react-admin";
import { MuiThemeProvider } from "@material-ui/core/styles";
import OauthCard from "./oauthCard";

class MyLoginPage extends Component {
  submit = (e) => {
    console.log("ddddxxxxxdddd");
    e.preventDefault();
    // gather your data/credentials here
    const credentials = {};

    // Dispatch the userLogin action (injected by connect)
    this.props.userLogin(credentials);
  };

  render() {
    return (
      <MuiThemeProvider theme={this.props.theme}>
        <form onSubmit={this.submit}>
          <OauthCard />
        </form>
      </MuiThemeProvider>
    );
  }
}

export default connect(undefined, { userLogin })(MyLoginPage);
