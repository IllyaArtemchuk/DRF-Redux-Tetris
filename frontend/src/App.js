import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import history from "./history";
import Tetris from "./components/Tetris";
import SignUp from "./components/user/SignUp";
import SignIn from "./components/user/SignIn";
import Profile from "./components/user/Profile";
import Leaderboards from "./components/Leaderboards";
import Header from "./components/Header";
import styled from "styled-components";
import backgroundImage from "./img/backgroundImage.jpg";
import { authCheckState } from "./redux/authentication/authActions";

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

  render() {
    return (
      <Application>
        <Router history={history}>
          <Header />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
