import React from "react";
import { Card, Image } from "semantic-ui-react";
import styled from "styled-components";

const StyledCard = styled(Card)`
  &&& {
    width: 5vw;
    height: 7vw;
    min-height: 70px;
    min-width: 50px;
    text-align: center;
    background-color: #050505;
    color: white;
    font-size: calc(5px + 0.7vw);
    font-family: PixelFont;
    border-style: none;
    border: 0px;
    margin-right: 1vw;
    margin-top: 0px;
  }
`;

const CardText = styled(Card.Header)`
  margin-top: 0.1vw;
`;
const PieceDisplay = (props) => {
  return (
    <StyledCard>
      <CardText style={{ marginTop: ".1vw" }}>{props.text}</CardText>
      <Image src={require("../../static/img/pieces/Empty.jpg")} size="small" />
    </StyledCard>
  );
};

export default PieceDisplay;
