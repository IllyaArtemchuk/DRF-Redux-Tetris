import React from "react";
import { Route, Redirect } from "react-router-dom";
import history from "./history";

const PrivateRoute = ({ isAuthenticated, route, component }) => {
  if (!isAuthenticated) {
    return <Redirect to={{ pathname: "/signin" }} />;
  }
  return <Route path={route} exact component={component} />;
};

export default PrivateRoute;
