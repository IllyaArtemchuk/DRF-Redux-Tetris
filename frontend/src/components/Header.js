import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "./Title";

const LinkText = styled.span`
  font-family: "Trispace", sans-serif;
`;

const HeaderTitle = styled.div`
  font-family: "Monda", sans-serif;
`;

const Header = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div className="ui massive inverted menu">
      <HeaderTitle className="header item">
        REDUX- <Title />
      </HeaderTitle>
      <Link className="yellow item" to="/">
        <i class="gamepad icon" />
        <LinkText>Play Tetris</LinkText>
      </Link>
      <Link className="teal item" to="/leaderboards">
        <i class="trophy icon" /> <LinkText>Leaderboards</LinkText>
      </Link>
      <Link className="pink item" to="/signin">
        <i class="sign-in icon" />
        <LinkText>Sign In</LinkText>
      </Link>
      <Link className="pink item" to="/signup">
        <i class="address card outline icon" />
        <LinkText>Sign Up</LinkText>
      </Link>
    </div>
  );
};

export default Header;
