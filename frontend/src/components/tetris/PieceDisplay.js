import React from "react";
import { Card, Image } from "semantic-ui-react";
import styled from "styled-components";

const StyledCard = styled(Card)`
  &&& {
    width: 5vw;
    height: 7vw;
    min-height: ${(props) => {
      switch (props.size) {
        case "small":
          return "75px";
        case "medium":
          return "90px";
        case "large":
          return "100px";
      }
    }};
    min-width: ${(props) => {
      switch (props.size) {
        case "small":
          return "50px";
        case "medium":
          return "65px";
        case "large":
          return "80px";
      }
    }};
    text-align: center;
    background-color: #050505;
    color: white;
    font-size: calc(5px + 0.7vw);
    font-family: PixelFont;
    border-style: none;
    border: 0px;
    margin-right: calc(4px + 0.9vw);
    margin-top: 0px;
    border-radius: 0px;
  }
`;

const CardText = styled(Card.Header)`
  margin-top: 0.1vw;
  margin-bottom: calc(2px + 0.3vw);
`;

const PieceDisplay = (props) => {
  const RenderPiece = () => {
    let piece = props.piece;
    let pieceChar = null;
    let pieceUrl = "Empty";
    if (piece && props.gameRunning) {
      if (piece[1][1] !== 0) {
        pieceChar = piece[1][1];
      } else {
        for (let row in piece) {
          for (let col in piece[0]) {
            if (piece[row][col] !== 0) {
              pieceChar = piece[row][col];
              break;
            }
          }
          if (pieceChar !== null) break;
        }
      }
      if (pieceChar !== null) {
        pieceUrl = pieceChar;
      }
    }
    return (
      <Image
        src={require("../../static/img/pieces/" + pieceUrl + ".jpg")}
        size="small"
      />
    );
  };

  return (
    <StyledCard size={props.size}>
      <CardText style={{ marginTop: ".1vw" }}>{props.text}</CardText>
      {RenderPiece()}
    </StyledCard>
  );
};

export default PieceDisplay;
