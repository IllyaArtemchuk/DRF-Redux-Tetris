import React from "react";
import styled from "styled-components";

const Container = styled.div`
  &&& {
    margin-top: 5%;
  }
`;

const FormContainer = (props) => {
  return (
    <Container className="ui grid">
      <div className="five wide column" />
      <div className="six wide column">{props.children}</div>
      <div className="five wide column" />
    </Container>
  );
};

export default FormContainer;
