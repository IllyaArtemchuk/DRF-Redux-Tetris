import React from "react";
import Tetris from "./Tetris";
import { connect } from "react-redux";
import {
  startGameSetup,
  setupGame,
  handleKeyPress,
  movePlayerDown,
} from "../../redux/tetris/game/gameActions";
import KeyboardEventHandler from "react-keyboard-event-handler";

// This Component Handles main tetris logic with redux
class TetrisWrapper extends React.Component {
  componentDidMount() {
    this.props.setupGame();
  }

  startInterval = () => {
    this.Interval = setInterval(() => {
      this.props.movePlayerDown(this.props.game);
    }, 400);
  };

  startGame = () => {
    this.props.startGame(this.props.game.nextPiece);
    this.startInterval();
  };

  render() {
    return (
      <div onKeyDown={(e) => console.log(e.key)}>
        <KeyboardEventHandler
          handleKeys={["left", "right", "down", "up", "space", "e", "q", "v"]}
          onKeyEvent={(key, e) => {
            console.log(e);
            if (key === "down") {
              console.log("trigored");
              clearInterval(this.Interval);
            }
            this.props.handleKeyPress(key, this.props.game);
          }}
        />
        <KeyboardEventHandler
          handleKeys={["down"]}
          handleEventType="keydown"
          onKeyEvent={(key, e) => {
            if (this.props.game.gameRunning) {
              this.startInterval();
            }
          }}
        />
        <Tetris game={this.props.game} startGame={this.startGame} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setupGame: () => dispatch(setupGame()),
    startGame: (piece) => dispatch(startGameSetup(piece)),
    handleKeyPress: (key, gameState) =>
      dispatch(handleKeyPress(key, gameState)),
    movePlayerDown: (gameState) => dispatch(movePlayerDown(gameState)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TetrisWrapper);
