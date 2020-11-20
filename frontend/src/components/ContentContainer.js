import React from "react";
import { Grid } from "semantic-ui-react";

const ContentContainer = (props) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={2} />
        <Grid.Column width={10}>{props.children}</Grid.Column>
        <Grid.Column width={2} />
      </Grid.Row>
    </Grid>
  );
};

export default ContentContainer;
