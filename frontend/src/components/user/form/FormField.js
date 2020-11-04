import React from "react";
import styled from "styled-components";
import { Form, Label } from "semantic-ui-react";

const Input = styled.input`
  &&& {
    border-color: ${(props) => {
      if (props.active) {
        switch (props.color) {
          case "pink":
            return "#ff59b7";
          case "purple":
            return "#d659ff";
          default:
            return "#ff59b7";
        }
      }
    }}!important;
    border-style: solid !important;
    border-width: 1.5px !important;
    transition: 0.1s !important;
    height: 35px;
  }
`;

const renderValidationError = (validation, color) => {
  let validationErrors = validation();
  if (validationErrors !== null) {
    return (
      <Label color={color} pointing>
        {validationErrors}
      </Label>
    );
  }
};

const FormField = ({ field, activeInputChange, activeInput, color }) => {
  const handleClick = (e) => {
    activeInputChange(e, field.name);
    if (!field.touched) field.setTouched();
  };
  return (
    <Form.Field>
      <label>
        {field.placeholder.toString().charAt(0).toUpperCase() +
          field.placeholder.toString().slice(1)}
        {field.extraInformation ? `  ${field.extraInformation}` : null}
      </label>
      <Input
        type={field.type}
        value={field.value}
        name={field.name}
        onChange={(e) => field.onValueChange(e, field.name)}
        onClick={(e) => handleClick(e)}
        placeholder={field.placeholder}
        active={activeInput === field.name}
        color={color}
      />
      {renderValidationError(field.validation, color)}
    </Form.Field>
  );
};

export default FormField;
