import React from "react";
import { StyledButton } from "../StyledComponents";

const ReplayButton = ({ size, restartGame }) => {
  return (
    <StyledButton onClick={() => restartGame()} color="green" size={size}>
      Replay
    </StyledButton>
  );
};

export default ReplayButton;
