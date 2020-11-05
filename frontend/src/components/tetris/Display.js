import React from "react";
import PieceDisplay from "./PieceDisplay";
import styled from "styled-components";

const Display = (props) => {
  return (
    <div>
      <PieceDisplay piece={props.nextPiece} pieces={props.pieces} />
    </div>
  );
};

export default Display;
