import React from "react";
import PieceDisplay from "./PieceDisplay";
import ScoreDisplay from "./ScoreDisplay";
import GameOver from "./GameOver";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";

const Wrapper = styled.div`
  &&& {
    margin-left: 2vw !important;
  }
`;

const PieceDisplays = styled.div`
  display: flex;
`;

const StartButton = styled(Button)`
  &&& {
    font-family: PixelFont;
    font-size: 1.3vw;
    margin-top: 1vw;
    width: 11vw;
    border-radius: 0px;
    min-width: ${(props) => {
      switch (props.size) {
        case "large":
          return "170px";
        case "medium":
          return "140px";
        case "small":
          return "110px";
      }
    }}!important;
  }
`;

class SideBar extends React.Component {
  render() {
    return (
      <Wrapper>
        <PieceDisplays>
          {this.props.gameOver ? (
            <GameOver size={this.props.size} />
          ) : (
            <React.Fragment>
              <PieceDisplay
                text="HOLD"
                size={this.props.size}
                piece={this.props.heldPiece}
                gameRunning={this.props.gameRunning}
              />
              <PieceDisplay
                text="NEXT"
                size={this.props.size}
                piece={this.props.nextPiece}
                gameRunning={this.props.gameRunning}
              />
            </React.Fragment>
          )}
        </PieceDisplays>
        <ScoreDisplay
          size={this.props.size}
          score={this.props.score}
          rowsCleared={this.props.rowsCleared}
          time={this.props.time}
        />
        {!this.props.gameStarted ? (
          <StartButton
            color="green"
            size={this.props.size}
            onClick={this.props.startGame}
          >
            Start Game
          </StartButton>
        ) : null}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    size: state.app.size,
    gameStarted: state.game.gameRunning,
    gameOver: state.game.gameOver,
  };
};

export default connect(mapStateToProps)(SideBar);
