import React from "react";
import styled from "styled-components";

const ErrorBody = styled.div`
  &&& {
    background-color: #050505;
    border-style: solid;
    border-color: #ff2e2e;
    border-width: 1.5px;
  }
`;
const ErrorHeader = styled.div`
  &&& {
    color: #ff6161;
    text-align: center;
  }
`;

const ErrorMessage = ({ errors }) => {
  const renderErrors = errors.map((error, index) => (
    <li key={index}>{error}</li>
  ));

  return (
    <ErrorBody className="ui black message">
      <div className="header">
        <ErrorHeader> There were some errors with your submission </ErrorHeader>
      </div>
      <ul className="list">{renderErrors}</ul>
    </ErrorBody>
  );
};

export default ErrorMessage;
