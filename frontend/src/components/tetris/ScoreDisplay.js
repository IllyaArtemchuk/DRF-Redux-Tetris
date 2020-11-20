import React from "react";
import { Card, Feed } from "semantic-ui-react";
import styled from "styled-components";

const ScoreCard = styled(Card)`
  &&& {
    font-family: PixelFont;
    width: 11vw;
    height: 7vw;
    min-height: ${(props) => (props.size === "large" ? "160px" : "100px")};
    min-width: ${(props) => {
      switch (props.size) {
        case "large":
          return "170px";
        case "medium":
          return "140px";
        case "small":
          return "110px";
        default:
          return "110px";
      }
    }};
    background-color: #050505;
    border-radius: 0px;
  }
`;

const ScoreText = styled(Feed.Summary)`
  &&& {
    font-size: calc(4px + 0.7vw) !important;

    color: white !important;
    white-space: nowrap;
  }
`;

const FirstCounter = styled(Feed.Event)`
  &&& {
    margin-top: ${(props) => (props.size === "large" ? ".3vw" : "0vw")};
  }
`;

const Counter = styled(Feed.Event)`
  &&& {
    margin-top: ${(props) => (props.size === "large" ? "1vw" : ".1vw")};
  }
`;

const ScoreDisplay = (props) => {
  return (
    <ScoreCard size={props.size}>
      <Card.Content>
        <Feed>
          <FirstCounter size={props.size}>
            <Feed.Content>
              <ScoreText>SCORE {props.score}</ScoreText>
            </Feed.Content>
          </FirstCounter>

          <Counter size={props.size}>
            <Feed.Content>
              <ScoreText>LINES {props.rowsCleared}</ScoreText>
            </Feed.Content>
          </Counter>
          <Counter size={props.size}>
            <Feed.Content>
              <ScoreText>TIME {props.time}</ScoreText>
            </Feed.Content>
          </Counter>
        </Feed>
      </Card.Content>
    </ScoreCard>
  );
};

export default ScoreDisplay;
