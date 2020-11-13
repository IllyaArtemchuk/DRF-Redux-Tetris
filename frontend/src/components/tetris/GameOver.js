import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import history from "../../history.js";
import styled from "styled-components";

const GameOverText = styled.div`
  font-family: PixelFont;
  color: red;
  font-size: calc(10px + 1vw);
  margin-bottom: 1vw;
`;

const GameOver = (props) => {
  return <GameOverText>Game Over</GameOverText>;
};

export default GameOver;
