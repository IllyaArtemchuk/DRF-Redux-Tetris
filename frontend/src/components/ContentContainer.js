import React from "react";
import styled from "styled-components";

const Container = styled.div`
  &&& {
    margin-top: 50px;
  }
`;

const ContentContainer = (props) => {
  return (
    <Container className="ui grid">
      <div className="two wide column" />
      <div className="ten wide column">{props.children}</div>
      <div className="two wide column" />
    </Container>
  );
};

export default ContentContainer;
