import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const titleLetter = styled.span`
  color: ${(props) => props.color};
`;

const Header = () => {
  return (
    <div className="ui huge inverted menu">
      <div className="header item">
        Redux-<titleLetter color="#00F0F0">T</titleLetter>etris
      </div>
      <Link className="yellow item" to="/">
        <i class="gamepad icon" />
        Play Tetris
      </Link>
      <Link className="teal item" to="/leaderboards">
        <i class="trophy icon" /> Leaderboards
      </Link>
      <Link className="pink item" to="/signin">
        <i class="sign-in icon" />
        Sign In
      </Link>
      <Link className="pink item" to="/signup">
        <i class="address card outline icon" />
        Sign Up
      </Link>
    </div>
  );
};

export default Header;
