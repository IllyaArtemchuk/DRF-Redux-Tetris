import React from "react";
import styled from "styled-components";

const Input = styled.input`
  &&& {
    border-color: ${(props) =>
      props.active
        ? props.color === "pink"
          ? "#ff59b7"
          : "#d659ff"
        : null}!important;
    border-style: solid !important;
    border-width: 1.5px !important;
    transition: 0.1s !important;
    height: 35px;
  }
`;

const FormField = ({
  name,
  value,
  onValueChange,
  onClick,
  placeholder,
  activeInput,
  type,
  color,
}) => {
  return (
    <div className="field">
      <label>
        {placeholder.toString().charAt(0).toUpperCase() +
          placeholder.toString().slice(1)}
      </label>
      <Input
        type={type}
        value={value}
        name={name}
        onChange={(e) => onValueChange(e, name)}
        onClick={(e) => onClick(e, name)}
        placeholder={placeholder}
        active={activeInput === name}
        color={color}
      />
    </div>
  );
};

export default FormField;
