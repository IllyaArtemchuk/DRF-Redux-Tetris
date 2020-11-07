import React from "react";
import { Card, Feed, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { connect } from "react-redux";

const ScoreCard = styled(Card)`
  &&& {
    font-family: PixelFont;
    width: 11vw;
    height: 7vw;
    min-height: ${(props) => (props.size === "large" ? "160px" : "100px")};
    min-width: ${(props) => {
      switch (props.size) {
        case "large":
          return "160px";
        case "medium":
          return "140px";
        case "small":
          return "110px";
      }
    }};
    background-color: #050505;
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

class ScoreDisplay extends React.Component {
  render() {
    return (
      <ScoreCard size={this.props.size}>
        <Card.Content>
          <Feed>
            <FirstCounter size={this.props.size}>
              <Feed.Content>
                <ScoreText>SCORE 1,000</ScoreText>
              </Feed.Content>
            </FirstCounter>

            <Counter size={this.props.size}>
              <Feed.Content>
                <ScoreText>TIME 2:00</ScoreText>
              </Feed.Content>
            </Counter>
            <Counter size={this.props.size}>
              <Feed.Content>
                <ScoreText>LINES 6</ScoreText>
              </Feed.Content>
            </Counter>
          </Feed>
        </Card.Content>
      </ScoreCard>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    size: state.app.size,
  };
};

export default connect(mapStateToProps)(ScoreDisplay);
