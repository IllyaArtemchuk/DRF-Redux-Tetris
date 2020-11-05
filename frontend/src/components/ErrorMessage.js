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
  const FormatField = (field) => {
    switch (field) {
      case "username":
        return "Username";
      case "email":
        return "Email";
      case "password":
      case "password1":
      case "password2":
        return "Password";
      default:
        return "Field";
    }
  };
  const renderErrors = Object.keys(errors[0]).map((key, index) => (
    <li key={index}>{`${FormatField(key)}: ${errors[0][key][0]}`}</li>
  ));
  console.log(errors[0]);
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
