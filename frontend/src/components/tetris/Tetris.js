import React from "react";
import Stage from "./Stage";
import styled from "styled-components";
import SideBar from "./SideBar";
import HowToPlay from "./HowToPlay";
import { Grid } from "semantic-ui-react";

export const StyledTetris = styled.div`
  &&& {
    display: flex;
    align-item: flex-start;
    padding-top: 20px;
    margin: 0;
  }
`;

const Tetris = ({ game, startGame, size }) => {
  let { nextPiece, heldPiece, gameRunning, score, rowsCleared, time } = game;
  return (
    <span>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <StyledTetris>
              <Stage />
              <SideBar
                startGame={startGame}
                nextPiece={nextPiece}
                heldPiece={heldPiece}
                gameRunning={gameRunning}
                score={score}
                rowsCleared={rowsCleared}
                time={time}
              />
              {size !== "small" ? <HowToPlay size={size} /> : null}
            </StyledTetris>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </span>
  );
};

export default Tetris;
