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

  componentDidUpdate(prevProps) {
    if (
      prevProps.game.gameRunning !== this.props.game.gameRunning &&
      this.props.game.gameRunning === false
    ) {
      clearInterval(this.Interval);
    }
  }

  startInterval = () => {
    this.Interval = setInterval(() => {
      this.props.movePlayerDown(this.props.game);
    }, 400);
  };

  startGame = () => {
    this.props.startGame(this.props.game.nextPiece);
    //this.startInterval();
  };

  render() {
    return (
      <div onKeyDown={(e) => console.log(e.key)}>
        <KeyboardEventHandler
          handleKeys={["left", "right", "down", "up", "space", "e", "q", "v"]}
          onKeyEvent={(key, e) => {
            if (key === "down") {
              //  clearInterval(this.Interval);
            }
            this.props.handleKeyPress(key, this.props.game);
          }}
        />
        <KeyboardEventHandler
          handleKeys={["down", "space"]}
          handleEventType="keyup"
          onKeyEvent={(key, e) => {
            if (this.props.game.gameRunning && key === "down") {
              //   this.startInterval();
            }
            if (key === "space") {
              this.props.movePlayerDown(this.props.game);
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
