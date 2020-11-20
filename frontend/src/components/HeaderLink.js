import React from "react";
import styled from "styled-components";
import { Menu, Popup } from "semantic-ui-react";
import history from "../history";

const LinkText = styled.span`
  font-family: "PixelFont", sans-serif;
  font-size: 13px;
  color: #ffffff;
`;

const colorReference = {
  orange: "#F2711C",
  green: "#36ff65",
  teal: "#00B5AD",
  purple: "#d659ff",
  pink: "#ff59b7",
  yellow: "#ffe942",
};

const SignInPopup = styled(Popup)`
  &&& {
    background-color: #050505;
    font-family: PixelFont;
  }
`;

const HeaderLink = ({ to, color, id, icon, text, selectedItem, disabled }) => {
  return (
    <Menu.Item
      id={id}
      color={color}
      active={id === selectedItem}
      onClick={() => history.push(to)}
      disabled={disabled}
    >
      <SignInPopup
        inverted
        disabled={!disabled}
        trigger={
          <span>
            <i
              style={{
                fontSize: "19px",
                color: id === selectedItem ? null : `${colorReference[color]}`,
              }}
              // style={
              //   id === selectedItem ? null : { color: `${colorReference[color]}` }
              // }
              className={`${icon} icon`}
            />
            <LinkText>{text}</LinkText>
          </span>
        }
      >
        <Popup.Header>Sign In To Visit This Page</Popup.Header>
      </SignInPopup>
    </Menu.Item>
  );
};

export default HeaderLink;
