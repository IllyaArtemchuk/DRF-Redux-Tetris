import React from "react";
import styled from "styled-components";
import { Segment } from "semantic-ui-react";

const ScoreDisplay = styled(Segment)`
  &&& {
    color: white;
    background-color: #050505;
    font-size: calc(9px + 0.6vw);
    width: 23vw;
    min-width: 350px;
    text-align: center;
    border-color: ${(props) => (props.IsUser ? "#ff1ff8" : "#f8ff1f")};
    border-width: 1px 0px 1px 0px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 0px;
  }
`;

const Position = styled.div`
  &&& {
    color: ${(props) => (props.IsUser ? "#ff1ff8" : "#f8ff1f")};
    float: left;
    font-size: calc(15px + 0.6vw);
  }
`;

const UserName = styled.div`
  float: left;
`;

const LeaderboardItem = ({ score, ind, user }) => {
  return (
    <ScoreDisplay IsUser={user.username === score.player.username}>
      <Position IsUser={user.username === score.player.username}>
        {ind + 1}
      </Position>
      {score.player.username}:{score.points}
    </ScoreDisplay>
  );
};

export default LeaderboardItem;
