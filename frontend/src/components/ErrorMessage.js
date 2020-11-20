import React from "react";
import { ErrorBody, ErrorHeader } from "./StyledComponents";

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
  return (
    <ErrorBody color="black">
      <ErrorHeader> There were some errors with your submission </ErrorHeader>
      <ul className="list">{renderErrors}</ul>
    </ErrorBody>
  );
};

export default ErrorMessage;
