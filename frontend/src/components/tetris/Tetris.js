import React from "react";
import Stage from "./Stage";
import styled from "styled-components";
import { connect } from "react-redux";
import { generateNewPiece } from "../../redux/tetris/game/gameActions";
import Display from "./Display";

export const StyledTetris = styled.div`
  &&& {
    display: flex;
    align-item: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;
  }
`;

class Tetris extends React.Component {
  componentDidMount() {
    this.props.generateNewPiece();
  }

  render() {
    return (
      <StyledTetris>
        <Stage />
        <Display nextPiece={this.props.nextPiece} pieces={this.props.pieces} />
      </StyledTetris>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pieces: state.game.pieces,
    nextPiece: state.game.nextPiece,
  };
};

export default connect(mapStateToProps, { generateNewPiece })(Tetris);
