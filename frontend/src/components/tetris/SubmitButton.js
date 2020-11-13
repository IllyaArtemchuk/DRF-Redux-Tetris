import React from "react";
import { StyledButton, SideBarCard, SignInLink } from "../StyledComponents";

const SubmitButton = ({ size, user }) => {
  if (!user) {
    return (
      <div>
        <SideBarCard size={size}>
          <SignInLink>Sign In</SignInLink> To Be Able To Submit Scores
        </SideBarCard>
        <StyledButton color="grey" disabled size={size}>
          Submit
        </StyledButton>
      </div>
    );
  }
  return (
    <StyledButton color="pink" size={size}>
      Submit
    </StyledButton>
  );
};

export default SubmitButton;
