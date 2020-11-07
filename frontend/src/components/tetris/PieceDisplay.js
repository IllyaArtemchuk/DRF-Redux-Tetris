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
  }
`;

const CardText = styled(Card.Header)`
  margin-top: 0.1vw;
`;
const PieceDisplay = (props) => {
  return (
    <StyledCard size={props.size}>
      <CardText style={{ marginTop: ".1vw" }}>{props.text}</CardText>
      <Image src={require("../../static/img/pieces/Empty.jpg")} size="small" />
    </StyledCard>
  );
};

export default PieceDisplay;
