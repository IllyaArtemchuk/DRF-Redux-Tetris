import React from "react";
import styled from "styled-components";
import { Segment, Icon, Grid } from "semantic-ui-react";

const ScoreDisplay = styled(Segment)`
  &&& {
    color: white;
    background-color: #050505;
    font-size: calc(9px + 0.3vw);
    font-family: PixelFont;
    width: 15vw;
    min-width: 250px;
    height: 2.2vw;
    min-height: 40px;
    text-align: center;
    border-color: ${(props) => {
      if (props.ind === 0) {
        return "#ffff00";
      } else if (props.ind === 1) {
        return "#56dbd0";
      } else if (props.ind === 2) {
        return "#61ad5a";
      } else return "#ffffff";
    }};
    color: ${(props) => {
      if (props.ind === 0) {
        return "#ffff00";
      } else if (props.ind === 1) {
        return "#56dbd0";
      } else if (props.ind === 2) {
        return "#61ad5a";
      } else return "#ffffff";
    }};
    margin-left: auto;
    margin-right: auto;
    border-radius: 0px;
  }
`;

const Position = styled.div`
  &&& {
    float: left;
    font-size: calc(11px + 0.4vw);
  }
`;

const LeaderboardItem = ({ score, ind, user }) => {
  const isUser = () => {
    return user ? user.username === score.player.username : undefined;
  };

  const positionIcon = () => {
    if (isUser()) {
      return <Icon name="user" />;
    }
    if (ind <= 2) {
      return <Icon name="chess queen" />;
    }
  };

  const scoreRender = () => {
    if (score.player.username) {
      return `${score.player.username} : ${score.points}`;
    } else {
      return score.points;
    }
  };
  return (
    <ScoreDisplay $isuser={isUser()} ind={ind}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Position $isuser={isUser()}>
              {ind + 1}
              {positionIcon()}
            </Position>
          </Grid.Column>
          <Grid.Column width={12}>{scoreRender()}</Grid.Column>
        </Grid.Row>
      </Grid>
    </ScoreDisplay>
  );
};

export default LeaderboardItem;
