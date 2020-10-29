import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Tetris from "./components/Tetris";
import SignUp from "./components/user/SignUp";
import SignIn from "./components/user/SignIn";
import Profile from "./components/user/Profile";
import Leaderboards from "./components/Leaderboards";
import Header from "./components/Header";
import styled from "styled-components";
import backgroundImage from "./img/backgroundImage.jpg";

const Application = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${backgroundImage}) #000;
  background-size: cover;
`;

const App = () => {
  return (
    <Application>
      <Router history={history}>
        <Header>
          <Switch>
            <Route path="/" exact component={Tetris} />
            <Route path="/leaderboards" exact component={Leaderboards} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/profile/:id" exact component={Profile} />
          </Switch>
        </Header>
      </Router>
    </Application>
  );
};

export default App;
