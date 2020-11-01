import React from "react";
import styled from "styled-components";

const handleLetterColor = (letter) => {
  switch (letter) {
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
  color: ${({ letter }) => handleLetterColor(letter)};
`;

const Title = () => {
  return (
    <React.Fragment>
      <Letter letter="O">T</Letter>
      <Letter letter="Z">E</Letter>
      <Letter letter="T">T</Letter>
      <Letter letter="L">R</Letter>
      <Letter letter="I">I</Letter>
      <Letter letter="S">S</Letter>
    </React.Fragment>
  );
};

export default Title;
