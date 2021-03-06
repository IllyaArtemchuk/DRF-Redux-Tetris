import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import history from "./history";
import PrivateRoute from "./PrivateRoute";
import TetrisWrapper from "./components/tetris/TetrisLogicWrapper";
import SignUp from "./components/user/SignUp";
import SignIn from "./components/user/SignIn";
import Leaderboards from "./components/Leaderboards";
import Header from "./components/Header";
import styled from "styled-components";
import backgroundImage from "./static/img/backgroundImage.jpg";
import { authCheckState, authLogout } from "./redux/authentication/authActions";
import { getUserData, userLogout } from "./redux/user/userActions";
import { userDataLogout } from "./redux/leaderboards/leaderboardActions";
import { windowResize } from "./redux/application/appActions";

const Application = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${backgroundImage}) #000;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
`;

class App extends React.Component {
  // Changes the size of the window in store
  changeSizeState = () => {
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
    this.changeSizeState();
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
      this.props.userLogOut();
      this.props.userDataLogout();
    }
  }

  render() {
    return (
      <Application>
        <Router history={history}>
          <Header
            size={this.props.size}
            isAuthenticated={this.props.isAuthenticated}
            authLogOut={this.props.authLogOut}
          />
          <div className="ui container">
            <Switch>
              <Route path="/" exact component={TetrisWrapper} />
              <PrivateRoute path="/leaderboards" component={Leaderboards} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/signin" exact component={SignIn} />
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
    userDataLogout: () => dispatch(userDataLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
