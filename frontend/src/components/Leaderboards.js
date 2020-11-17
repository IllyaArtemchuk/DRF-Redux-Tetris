import React from "react";
import { List, Card, Segment, Grid } from "semantic-ui-react";
import styled from "styled-components";
import ContentContainer from "./ContentContainer";
import LeaderboardItem from "./LeaderboardItem";
import {
  getLeaderboard,
  getUserScores,
} from "../redux/leaderboards/leaderboardActions";
import { connect } from "react-redux";

const LeaderboardHeader = styled(Segment)`
  &&& {
    font-family: PixelFont;
    color: white;
    text-align: center;
    white-space: nowrap;
    width: 15vw;
    min-width: 270px;
    border-color: white;
    border-radius: 0px;
    font-size: calc(11px + 0.4vw);
    background-color: #050505;
  }
`;

class Leaderboards extends React.Component {
  componentDidMount() {
    this.props.getLeaderboard();
    if (this.props.user) {
      this.props.getUserScores(this.props.user.id);
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.user && this.props.user !== prevProps.user) {
      this.props.getUserScores(this.props.user.id);
      return true;
    }
  }

  renderLeaderboard = () => {
    if (this.props.leaderboard.data) {
      return this.props.leaderboard.data.results.map((score, index) => (
        <LeaderboardItem
          score={score}
          key={score.id}
          ind={index}
          user={this.props.user}
        />
      ));
    }
  };

  renderUserScores = () => {
    if (this.props.leaderboard.userData) {
      return this.props.leaderboard.userData.results.map((score, index) => (
        <LeaderboardItem score={score} key={score.id} ind={index} />
      ));
    }
  };

  render() {
    return (
      <Grid>
        <Grid.Row style={{ marginTop: "20px" }}>
          <Grid.Column width={6}>
            <LeaderboardHeader>Leaderboards</LeaderboardHeader>
            {this.renderLeaderboard()}
          </Grid.Column>
          <Grid.Column width={this.props.size === "large" ? 1 : 3} />
          <Grid.Column width={6}>
            <LeaderboardHeader>Your Scores</LeaderboardHeader>
            {this.renderUserScores()}
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    leaderboard: state.leaderboard,
    user: state.user.user,
    size: state.app.size,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLeaderboard: () => dispatch(getLeaderboard()),
    getUserScores: (userID) => dispatch(getUserScores(userID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboards);
