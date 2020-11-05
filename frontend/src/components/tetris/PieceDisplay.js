import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

const StyledDisplay = styled.div`
  &&& {
    display: grid;
    grid-template-rows: repeat(
      ${(props) => props.height},
      calc(25vw / ${(props) => props.width})
    );
    grid-template-columns: repeat(${(props) => props.width}, 1fr);
    grid-gap: 1px;
    border: 2px solid #333;
    width: 100%;
    max-width: 10vw;
    background: #111;
  }
`;

const PieceDisplay = ({ piece, pieces }) => {
  const blank = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  const renderPiece = () => {
    if (piece) {
      return piece.map((row) =>
        row.map((cell, x) => <Cell key={x} type={cell[0]} pieces={pieces} />)
      );
    } else {
      return blank.map((row) =>
        row.map((cell, x) => <Cell key={x} type={cell[0]} pieces={pieces} />)
      );
    }
  };

  return (
    <StyledDisplay height={blank.length} width={blank.width}>
      {renderPiece()}
    </StyledDisplay>
  );
};

export default PieceDisplay;
