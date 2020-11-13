import React from "react";
import PieceDisplay from "./PieceDisplay";
import ScoreDisplay from "./ScoreDisplay";
import GameOver from "./GameOver";
import styled from "styled-components";
import ReplayButton from "./ReplayButton";
import SubmitButton from "./SubmitButton";
import { StyledButton } from "../StyledComponents";
import { connect } from "react-redux";
import { setupGame } from "../../redux/tetris/game/gameActions";

const Wrapper = styled.div`
  &&& {
    margin-left: 2vw !important;
  }
`;

const PieceDisplays = styled.div`
  display: flex;
`;

class SideBar extends React.Component {
  renderGameEndButtons = () => {
    if (this.props.gameOver) {
      return (
        <React.Fragment>
          <div>
            <SubmitButton size={this.props.size} />
          </div>
          <ReplayButton
            size={this.props.size}
            restartGame={this.props.setupGame}
          />
        </React.Fragment>
      );
    }
  };

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
        {this.renderGameEndButtons()}
        {!this.props.gameStarted && !this.props.gameOver ? (
          <StyledButton
            color="green"
            size={this.props.size}
            onClick={this.props.startGame}
          >
            Start Game
          </StyledButton>
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

const mapDispatchToProps = (dispatch) => {
  return {
    setupGame: () => dispatch(setupGame()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
