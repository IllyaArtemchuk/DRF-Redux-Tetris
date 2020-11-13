import React, { useState } from "react";
import { StyledButton } from "../StyledComponents";
import { Card } from "semantic-ui-react";
import styled from "styled-components";

const SideBarCard = styled(Card)`
  &&& {
    font-family: PixelFont;
    width: 11vw;
    height: 3vw;
    color: white;
    text-align: center;
    padding-top: 0.5vw;
    margin-top: 0.9vw;
    font-size: calc(3px + 0.4vw);
    min-height: ${(props) => (props.size === "large" ? "80px" : "60px")};
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
    background-color: #050505;
    border-radius: 0px;
  }
`;

const ReplayButton = ({ size, restartGame }) => {
  const [replayClicked, setReplayClicked] = useState(false);
  if (replayClicked) {
    return (
      <div>
        <SideBarCard size={size}>
          Are You Sure? Unsubmitted score will be lost.
        </SideBarCard>
        <StyledButton color="green" size={size} onClick={() => restartGame()}>
          Yes, Replay
        </StyledButton>
      </div>
    );
  }
  return (
    <StyledButton
      onClick={() => setReplayClicked(true)}
      color="green"
      size={size}
    >
      Replay
    </StyledButton>
  );
};

export default ReplayButton;
