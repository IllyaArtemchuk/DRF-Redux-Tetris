import React from "react";
import styled from "styled-components";
import { Icon, Feed } from "semantic-ui-react";

const FeedEvent = styled(Feed.Event)`
  &&& {
    color: ${(props) => (props.ind === 0 && !props.prev ? "#eaff2b" : "white")};
    background-color: #050505;
    font-size: calc(10px + 0.4vw);
    font-family: PixelFont;
    width: 23vw;
    min-width: 300px;
    height: 2.6vw;
    min-height: 35px;
    text-align: center;
    margin-right: auto;
    border-radius: 0px;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) =>
      props.ind === 0 && !props.prev ? "#eaff2b" : "white"};
    margin-top: 15px;
  }
`;

const FeedSummary = styled(Feed.Summary)`
  padding-top: calc(5px + 0.6vw);
  float: left;
  margin-left: 3vw;
`;

const Position = styled.span`
  &&& {
    font-size: calc(14px + 0.5vw);
    color: ${(props) => (props.ind === 0 && !props.prev ? "#eaff2b" : "white")};
  }
`;

const LeaderboardItem = ({ score, ind, leaderboard }) => {
  console.log(leaderboard);
  return (
    <FeedEvent
      key={ind}
      ind={ind}
      prev={leaderboard ? leaderboard.previous : null}
    >
      <Feed.Content>
        <FeedSummary>
          <Position ind={ind} prev={leaderboard ? leaderboard.previous : null}>
            {ind + 1}
            <Icon name="chess queen" />
          </Position>
          {score.player.username} : {score.points}
        </FeedSummary>
      </Feed.Content>
    </FeedEvent>
  );
};

export default LeaderboardItem;
