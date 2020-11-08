import React from "react";
import Tetris from "./Tetris";
import { connect } from "react-redux";
import {
  startGameSetup,
  setupGame,
  handleKeyPress,
} from "../../redux/tetris/game/gameActions";
import KeyboardEventHandler from "react-keyboard-event-handler";

// This Component Handles main tetris logic with redux
class TetrisWrapper extends React.Component {
  componentDidMount() {
    this.props.setupGame();
  }

  startGame = () => {
    this.props.startGame(this.props.game.nextPiece);
  };

  render() {
    return (
      <div onKeyDown={(e) => console.log(e.key)}>
        <KeyboardEventHandler
          handleKeys={["left", "right", "down", "up", "space", "e", "q", "v"]}
          onKeyEvent={(key, e) =>
            this.props.handleKeyPress(key, this.props.game)
          }
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TetrisWrapper);
