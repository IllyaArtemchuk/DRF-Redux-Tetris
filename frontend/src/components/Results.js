import React from "react";
import { connect } from "react-redux";
import ContentContainer from "./ContentContainer";
import { Card, Button } from "semantic-ui-react";
import styled from "styled-components";

const StyledCard = styled(Card)`
  &&& {
    margin: auto;
    margin-top: 2vw;
    width: 30vw;
    text-align: center;
    background-color: #050505;
    color: white;
    min-width: 300px;
    border-radius: 0px;
  }
`;

const HeaderText = styled.div`
  font-family: pixelFont;
  font-size: calc(20px + 1.2vw);
  margin-top: calc(5px + 0.7vw);
  margin-bottom: calc(15px + 1.6vw);
`;

const Desc = styled.div`
  font-family: pixelFont;
`;

const DescItem = styled.div`
  margin-top: calc(6px + 1vw);
  
  font-size: calc(10px + 1.2vw);
  color ${(props) => (props.color ? props.color : "white")}
`;

const StyledButton = styled(Button)`
  &&& {
    margin-bottom: calc(5px + 1.5vw);
    font-family: pixelFont;
    font-size: calc(10px + 1vw);
    text-align: center;
    width: calc(80px + 10vw);
    height: calc(40px + 2vw);
    border-radius: 0px;
  }
`;

const Divider = styled.div`
  margin-top: calc(8px + 2vw);
`;

class Results extends React.Component {
  displayUserName = () => {
    if (this.props.user) {
      return this.props.user.username;
    } else {
      return "Unknown";
    }
  };
  renderDescription = () => {
    return (
      <Desc>
        <Divider>
          <DescItem color="#ffb300">User</DescItem>
          <DescItem>{this.displayUserName()}</DescItem>
        </Divider>
        <Divider>
          <DescItem color="#2afa62">Score</DescItem>
          <DescItem>{this.props.score}</DescItem>
        </Divider>
        <Divider>
          <DescItem color="#c300ff">Lines</DescItem>
          <DescItem>{this.props.lines}</DescItem>
        </Divider>
        <Divider>
          <StyledButton color="pink">Submit</StyledButton>
          <StyledButton color="green">Replay</StyledButton>
        </Divider>
      </Desc>
    );
  };
  render() {
    return (
      <ContentContainer textAlign="center">
        <StyledCard
          header={<HeaderText style={{ color: "white" }}>RESULTS</HeaderText>}
          description={this.renderDescription()}
          inverted
        ></StyledCard>
      </ContentContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    score: state.game.score,
    lines: state.game.rowsCleared,
  };
};

export default connect(mapStateToProps)(Results);
