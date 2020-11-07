import React from "react";
import Tetris from "./Tetris";
import { connect } from "react-redux";
import { startGame } from "../../redux/tetris/game/gameActions";

// This Component Handles main tetris logic with redux
class TetrisWrapper extends React.Component {
  componentDidMount() {
    this.props.startGame();
  }

  render() {
    return (
      <div>
        <Tetris game={this.props.game} />
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
    startGame: () => dispatch(startGame()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TetrisWrapper);
