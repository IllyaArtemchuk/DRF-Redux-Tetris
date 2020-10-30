import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderLink from "./HeaderLink";
import styled from "styled-components";
import Title from "./Title";

const HeaderTitle = styled.div`
  font-family: "Monda", sans-serif;
`;

const NavBar = styled.div`
  &&& {
    background-color: #050505;
  }
`;

const Header = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <NavBar className="ui massive menu inverted">
      <NavBar className="ui massive inverted menu container">
        <Link className="header item" to="/">
          <HeaderTitle>
            REDUX- <Title />
          </HeaderTitle>
        </Link>
        <HeaderLink
          to="/"
          color="green"
          id="1"
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          icon="gamepad"
          text="Play Tetris"
        />
        <HeaderLink
          to="/leaderboards"
          color="yellow"
          id="2"
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          icon="trophy"
          text="Leaderboards"
        />
        <div className="right menu">
          <HeaderLink
            to="/signin"
            color="pink"
            id="3"
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            icon="sign-in"
            text="Sign In"
          />
          <HeaderLink
            to="/signup"
            color="purple"
            id="4"
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            icon="address card outline"
            text="Sign Up"
          />
        </div>
      </NavBar>
    </NavBar>
  );
};

export default Header;
