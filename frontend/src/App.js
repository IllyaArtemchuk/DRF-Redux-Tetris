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
import { windowResize } from "./redux/application/appActions";

const Application = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${backgroundImage}) #000;
  background-size: cover;
`;

class App extends React.Component {
  // Changes the size of the window in store
  changeSizeState = () => {
    console.log("current size", this.props.size);
    console.log(window.innerWidth);
    if (window.innerWidth > 1100 && this.props.size !== "large") {
      this.props.windowResize("large");
    } else if (
      window.innerWidth <= 1100 &&
      window.innerWidth > 800 &&
      this.props.size !== "medium"
    ) {
      this.props.windowResize("medium");
    } else if (window.innerWidth <= 800 && this.props.size !== "small") {
      this.props.windowResize("small");
    }
  };

  componentDidMount() {
    this.props.autoSignIn();
    window.addEventListener("resize", this.changeSizeState);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.isAuthenticated &&
      prevProps.isAuthenticated !== this.props.isAuthenticated
    ) {
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
    size: state.app.size,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoSignIn: () => dispatch(authCheckState()),
    getUserData: () => dispatch(getUserData()),
    userLogOut: () => dispatch(userLogout()),
    authLogOut: () => dispatch(authLogout()),
    windowResize: (size) => dispatch(windowResize(size)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
