import React from "react";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends React.Component {
  render() {
    if (!localStorage.getItem("token")) {
      return <Redirect to={{ pathname: "/signin" }} />;
    }
    return (
      <Route path={this.props.route} exact component={this.props.component} />
    );
  }
}

export default PrivateRoute;
