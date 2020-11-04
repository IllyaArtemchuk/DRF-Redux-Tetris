import React from "react";
import styled from "styled-components";
import { Grid } from "semantic-ui-react";

const StyledGrid = styled(Grid)`
  &&& {
    margin-top: 5%;
  }
`;

const FormContainer = (props) => {
  return (
    <StyledGrid>
      <Grid.Row>
        <Grid.Column width={5} />
        <Grid.Column width={6}>{props.children}</Grid.Column>
        <Grid.Column width={5} />
      </Grid.Row>
    </StyledGrid>
  );
};

export default FormContainer;
