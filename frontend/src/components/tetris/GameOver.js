import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import history from "../../history.js";
import styled from "styled-components";

const GameOverBox = styled(Segment)`
  &&& {
    background-color: #050505;
    width: 11vw;
    height: 2vw;
    min-height: ${(props) => (props.size === "large" ? "20px" : "20px")};
    min-width: ${(props) => {
      switch (props.size) {
        case "large":
          return "170px";
        case "medium":
          return "140px";
        case "small":
          return "110px";
      }
    }};
    display: flex;
    align-items: center;
    flex-direction: column;
    border-color: red;
    border-radius: 0px;
  }
`;

const GameOverText = styled.div`
  font-family: PixelFont;
  color: red;
  font-size: calc(5px + 0.8vw);
  white-space: nowrap;
  margin-top: ${(props) => (props.size === "large" ? "-5px" : "-10px")};
`;

const GameOver = ({ size }) => {
  return (
    <GameOverBox size={size}>
      <GameOverText size={size}>Game Over</GameOverText>
    </GameOverBox>
  );
};

export default GameOver;
