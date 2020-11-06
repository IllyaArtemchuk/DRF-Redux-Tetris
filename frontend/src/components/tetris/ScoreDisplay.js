import React from "react";
import { Card, Feed, Icon } from "semantic-ui-react";
import styled from "styled-components";

const ScoreCard = styled(Card)`
  &&& {
    font-family: PixelFont;
    width: 11vw;
    height: 7vw;
    background-color: #050505;
  }
`;

const ScoreText = styled(Feed.Summary)`
  &&& {
    font-size: 0.8vw !important;
    color: white !important;
    white-space: nowrap;
  }
`;

const FirstCounter = styled(Feed.Event)`
  &&& {
    margin-top: 0.3vw;
  }
`;

const Counter = styled(Feed.Event)`
  &&& {
    margin-top: 1vw;
  }
`;

const ScoreDisplay = (props) => {
  return (
    <ScoreCard>
      <Card.Content>
        <Feed>
          <FirstCounter>
            <Feed.Content>
              <ScoreText>SCORE 10,000</ScoreText>
            </Feed.Content>
          </FirstCounter>

          <Counter>
            <Feed.Content>
              <ScoreText>TIME 2:00</ScoreText>
            </Feed.Content>
          </Counter>
          <Counter>
            <Feed.Content>
              <ScoreText>LINES 6</ScoreText>
            </Feed.Content>
          </Counter>
        </Feed>
      </Card.Content>
    </ScoreCard>
  );
};

export default ScoreDisplay;
