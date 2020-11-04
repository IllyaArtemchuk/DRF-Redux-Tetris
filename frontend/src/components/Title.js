import React from "react";
import styled from "styled-components";

const handleLetterColor = (block) => {
  // These letters are tetris shapes, not alphabetical letters
  switch (block) {
    case "I":
      return "#0dd1d1";
    case "J":
      return "#0000F0";
    case "L":
      return "#ffb92e";
    case "O":
      return "#F0F000";
    case "S":
      return "#00d100";
    case "T":
      return "#d685ff";
    case "Z":
      return "#ff5c5c";
    default:
      return "#DFDFDF";
  }
};

const Letter = styled.span`
  color: ${({ block }) => handleLetterColor(block)};
`;

const Title = () => {
  return (
    <React.Fragment>
      <Letter block="O">T</Letter>
      <Letter block="Z">E</Letter>
      <Letter block="T">T</Letter>
      <Letter block="L">R</Letter>
      <Letter block="I">I</Letter>
      <Letter block="S">S</Letter>
    </React.Fragment>
  );
};

export default Title;
