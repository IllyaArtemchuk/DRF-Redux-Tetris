import React from "react";
import Stage from "./Stage";
import styled from "styled-components";
import SideBar from "./SideBar";
import { Container } from "semantic-ui-react";

export const StyledTetris = styled(Container)`
  &&& {
    display: flex;
    align-item: flex-start;
    padding: 40px;
    margin: 0;
    max-width: 900px;
  }
`;

const Tetris = (props) => {
  return (
    <StyledTetris>
      <Stage />
      <SideBar
        startGame={props.startGame}
        nextPiece={props.game.nextPiece}
        heldPiece={props.game.heldPiece}
        gameRunning={props.game.gameRunning}
      />
    </StyledTetris>
  );
};

export default Tetris;
