import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import history from "./history";
import Tetris from "./components/tetris/Tetris";
import SignUp from "./components/user/SignUp";
import SignIn from "./components/user/SignIn";
import Profile from "./components/user/Profile";
import Leaderboards from "./components/Leaderboards";
import Header from "./components/Header";
import styled from "styled-components";
import backgroundImage from "./static/img/backgroundImage.jpg";
import { authCheckState, authLogout } from "./redux/authentication/authActions";
import { getUserData, userLogout } from "./redux/user/userActions";

const Application = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${backgroundImage}) #000;
  background-size: cover;
`;

class App extends React.Component {
  componentDidMount() {
    this.props.autoSignIn();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.isAuthenticated &&
      prevProps.isAuthenticated !== this.props.isAuthenticated
    ) {
      console.log("get user Data triggered from componentDidUpdate");
      this.props.getUserData();
    } else if (
      !this.props.isAuthenticated &&
      prevProps.isAuthenticated !== this.props.isAuthenticated
    ) {
      ("");
      this.props.userLogOut();
    }
  }

  render() {
    return (
      <Application>
        <Router history={history}>
          <Header
            isAuthenticated={this.props.isAuthenticated}
            authLogOut={this.props.authLogOut}
          />
          <div className="ui container">
            <Switch>
              <Route path="/" exact component={Tetris} />
              <Route path="/leaderboards" exact component={Leaderboards} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/signin" exact component={SignIn} />
              <Route path="/profile/:id" exact component={Profile} />
            </Switch>
          </div>
        </Router>
      </Application>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoSignIn: () => dispatch(authCheckState()),
    getUserData: () => dispatch(getUserData()),
    userLogOut: () => dispatch(userLogout()),
    authLogOut: () => dispatch(authLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
