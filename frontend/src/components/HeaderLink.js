import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Menu } from "semantic-ui-react";
import history from "../history";

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
    <Menu.Item
      id={id}
      color={color}
      active={id === selectedItem}
      onClick={() => history.push(to)}
    >
      <i
        style={
          id === selectedItem ? null : { color: `${colorReference[color]}` }
        }
        className={`${icon} icon`}
      />
      <LinkText>{text}</LinkText>
    </Menu.Item>
  );
};

export default HeaderLink;
