import React from "react";
import { Card, Image } from "semantic-ui-react";
import styled from "styled-components";

const StyledCard = styled(Card)`
  &&& {
    width: 5vw;
    height: 6vw;
    text-align: center;
    background-color: #050505;
    color: white;
    font-size: 0.5vw;
    font-family: PixelFont;
    border-style: none;
    border: 0px;
    margin-right: 1vw;
    margin-top: 0px;
  }
`;

const PieceDisplay = (props) => {
  return (
    <StyledCard>
      <Card.Header>NEXT PIECE</Card.Header>
      <Image src={require("../../static/img/pieces/Empty.jpg")} size="small" />
    </StyledCard>
  );
};

export default PieceDisplay;
