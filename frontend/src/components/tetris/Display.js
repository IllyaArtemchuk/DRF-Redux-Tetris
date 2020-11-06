import React from "react";
import PieceDisplay from "./PieceDisplay";
import ScoreDisplay from "./ScoreDisplay";
import styled from "styled-components";
import { Grid } from "semantic-ui-react";

const Wrapper = styled.div`
  &&& {
    margin-left: 2vw !important;
  }
`;

const PieceDisplays = styled.div`
  display: flex;
`;

const display = (props) => {
  return (
    <Wrapper>
      <PieceDisplays>
        <PieceDisplay />
        <PieceDisplay />
      </PieceDisplays>
      <ScoreDisplay />
    </Wrapper>
  );
};

export default display;
