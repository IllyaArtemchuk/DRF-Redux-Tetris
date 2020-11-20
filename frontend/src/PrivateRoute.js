import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setRedirectMessage } from "./redux/application/appActions";

class PrivateRoute extends React.Component {
  messageChooser = () => {
    switch (this.props.path) {
      case "/leaderboards":
        return "You must be signed in to view leaderboards.";
      default:
        return "You must be signed in to view this page.";
    }
  };
  render() {
    if (!localStorage.getItem("token")) {
      this.props.setRedirectMessage(this.messageChooser());
      return (
        <Redirect
          to={{
            pathname: "/signin",
          }}
        />
      );
    }

    return (
      <Route path={this.props.path} exact component={this.props.component} />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRedirectMessage: (message) => dispatch(setRedirectMessage(message)),
  };
};

export default connect(null, mapDispatchToProps)(PrivateRoute);
