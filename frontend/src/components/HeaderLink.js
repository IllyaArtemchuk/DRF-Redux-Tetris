import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkText = styled.span`
  font-family: "Trispace", sans-serif;
`;

const colorReference = {
  orange: "#F2711C",
  green: "#36ff65",
  teal: "#00B5AD",
  purple: "#d659ff",
  pink: "#ff59b7",
  yellow: "#ffe942",
};

const HeaderLink = ({ to, color, id, icon, text, selectedItem }) => {
  return (
    <Link
      className={`${color} item ${id === selectedItem ? "active" : null}`}
      to={to}
      id={id}
    >
      <i
        style={
          id === selectedItem ? null : { color: `${colorReference[color]}` }
        }
        className={`${icon} icon`}
      />
      <LinkText>{text}</LinkText>
    </Link>
  );
};

export default HeaderLink;
