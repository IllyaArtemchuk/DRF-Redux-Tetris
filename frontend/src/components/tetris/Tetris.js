import React from "react";
import Stage from "./Stage";
import styled from "styled-components";
import { connect } from "react-redux";
import { generateNewPiece } from "../../redux/tetris/game/gameActions";
import Display from "./Display";
import { Container } from "semantic-ui-react";
import PieceDisplay from "./PieceDisplay";

export const StyledTetris = styled(Container)`
  &&& {
    display: flex;
    align-item: flex-start;
    padding: 40px;
    margin: 0;
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
        <Display />
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
