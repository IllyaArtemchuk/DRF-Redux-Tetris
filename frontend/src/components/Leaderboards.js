import React from "react";
import { List, Card, Segment } from "semantic-ui-react";
import styled from "styled-components";
import ContentContainer from "./ContentContainer";
import LeaderboardItem from "./LeaderboardItem";
import {
  getLeaderboard,
  getUserScores,
} from "../redux/leaderboards/leaderboardActions";
import { connect } from "react-redux";

const LeaderboardHeader = styled.h1`
  font-family: PixelFont;
  margin-top: 40px;
  font-size: calc(20px + 1vw);
`;

const Container = styled(Segment)`
  &&& {
    font-family: PixelFont;
    text-align: center;
    background: none;
    width: 27vw;
    min-width: 370px;
    border-radius: 0px;
  }
`;

class Leaderboards extends React.Component {
  componentDidMount() {
    this.props.getLeaderboard();
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
      return this.props.leaderboard.userdata.results.map((score, index) => (
        <LeaderboardItem score={score} key={score.id} ind={index} />
      ));
    }
  };

  render() {
    return (
      <ContentContainer>
        <span />
        <Container>
          <LeaderboardHeader style={{ color: "white" }}>
            Leaderboards
          </LeaderboardHeader>
          {this.renderLeaderboard()}
          {this.renderUserScores()}
        </Container>
      </ContentContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    leaderboard: state.leaderboard,
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLeaderboard: () => dispatch(getLeaderboard()),
    getUserScores: () => dispatch(getUserScores()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboards);
