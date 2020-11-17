import React from "react";
import { Segment, Loader } from "semantic-ui-react";
import styled from "styled-components";
import ContentContainer from "./ContentContainer";
import LeaderboardItem from "./LeaderboardItem";
import {
  getLeaderboard,
  getUserScores,
} from "../redux/leaderboards/leaderboardActions";
import { Pagination } from "semantic-ui-react";
import { connect } from "react-redux";

const LeaderboardHeader = styled(Segment)`
  &&& {
    font-family: PixelFont;
    color: white;
    text-align: center;
    white-space: nowrap;
    width: 23vw;
    min-width: 300px;
    border-color: white;
    border-radius: 0px;
    font-size: calc(15px + 0.7vw);
    background-color: #050505;
  }
`;

const PaginationContainer = styled.div`
  width: 23vw;
  min-width: 300px;
  display: flex;
  justify-content: center;
`;

class Leaderboards extends React.Component {
  state = {
    activePage: 1,
  };
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

  getPage = (e, { activePage }) => {
    this.props.getLeaderboard(
      `http://localhost:8000/api/v1/?limit=10&offset=${activePage - 1}0`
    );
    this.setState({
      activePage: activePage,
    });
  };

  renderUserScores = () => {
    if (this.props.leaderboard.userData) {
      return this.props.leaderboard.userData.results.map((score, index) => (
        <LeaderboardItem score={score} key={score.id} ind={index} />
      ));
    }
  };

  renderLeaderboard = () => {
    if (this.props.leaderboard.data) {
      return this.props.leaderboard.data.results.map((score, index) => (
        <LeaderboardItem
          score={score}
          ind={index + (this.state.activePage - 1) * 10}
          leaderboard={this.props.leaderboard.data}
        />
      ));
    }
  };

  render() {
    return (
      <ContentContainer textAlign="center">
        <div style={{ marginTop: "30px" }}>
          <LeaderboardHeader>Leaderboards</LeaderboardHeader>
          {this.props.leaderboard.data ? (
            <span>
              {this.renderLeaderboard()}
              <PaginationContainer>
                <Pagination
                  onPageChange={this.getPage}
                  boundaryRange={0}
                  defaultActivePage={1}
                  ellipsisItem={null}
                  firstItem={null}
                  lastItem={null}
                  siblingRange={1}
                  totalPages={Math.ceil(this.props.leaderboard.data.count / 10)}
                  pointing
                  style={{
                    backgroundColor: "#050505",
                    borderStyle: "solid",
                    borderColor: "#eaff2b",
                    borderWidth: "1px",
                    marginTop: "20px",
                    color: "#eaff2b",
                  }}
                  size="massive"
                  inverted
                />
              </PaginationContainer>
            </span>
          ) : (
            <Loader
              size="massive"
              active
              style={{
                marginTop: "200px",
                fontSize: "1.5vw",
                fontFamily: "PixelFont",
              }}
              inverted
            >
              Loading
            </Loader>
          )}
        </div>
      </ContentContainer>
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
    getLeaderboard: (customUrl) => dispatch(getLeaderboard(customUrl)),
    getUserScores: (userID) => dispatch(getUserScores(userID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboards);
