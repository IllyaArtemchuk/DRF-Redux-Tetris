import React from "react";
import history from "../../history";
import Tetris from "./Tetris";
import { connect } from "react-redux";
import {
  startGameSetup,
  setupGame,
  stopGameCleanUp,
  handleKeyPress,
  movePlayerDown,
  decrementTime,
  gameOver,
  stopGame,
} from "../../redux/tetris/game/gameActions";
import KeyboardEventHandler from "react-keyboard-event-handler";

// This Component Handles main tetris logic with redux
class TetrisWrapper extends React.Component {
  componentDidMount() {
    this.props.setupGame();
  }

  componentWillUnmount() {
    this.props.stopGameCleanUp();
    clearInterval(this.Interval);
    clearInterval(this.GameTime);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.game.gameRunning !== this.props.game.gameRunning &&
      this.props.game.gameRunning === false
    ) {
      clearInterval(this.Interval);
    }
    if (prevProps.game.time === 0 && this.props.game.time === -1) {
      this.props.gameOver();
      this.props.stopGame();
    }
    if (!prevProps.game.gameOver && this.props.game.gameOver) {
      clearInterval(this.GameTime);
    }
  }

  startInterval = (time = 400) => {
    this.Interval = setInterval(() => {
      this.props.movePlayerDown(this.props.game);
    }, time);
  };

  startTimer = () => {
    this.GameTime = setInterval(() => {
      this.props.decrementTime();
    }, 1000);
  };

  startGame = () => {
    this.props.startGame(this.props.game.nextPiece);
    this.startInterval();
    this.startTimer();
  };

  render() {
    return (
      <div onKeyDown={(e) => console.log(e.key)}>
        <KeyboardEventHandler
          handleKeys={["left", "right", "down", "up", "space", "e", "q", "v"]}
          onKeyEvent={(key, e) => {
            if (key === "down") {
              clearInterval(this.Interval);
            }

            this.props.handleKeyPress(key, this.props.game);
          }}
        />
        <KeyboardEventHandler
          handleKeys={["down", "space", "left", "right"]}
          handleEventType="keyup"
          onKeyEvent={(key, e) => {
            if (this.props.game.gameRunning && key === "down") {
              this.startInterval();
            }
            if (key === "space") {
              // this is one extra movement after the hardDrop function in redux that will
              // collide the tetromino and merge it with the board
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
    stopGameCleanUp: () => dispatch(stopGameCleanUp()),
    decrementTime: () => dispatch(decrementTime()),
    gameOver: () => dispatch(gameOver()),
    stopGame: () => dispatch(stopGame()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TetrisWrapper);
