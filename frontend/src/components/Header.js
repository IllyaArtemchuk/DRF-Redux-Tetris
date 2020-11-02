import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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

const Header = (props) => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    let url = location.pathname;
    switch (url) {
      case "/":
        setSelectedItem(1);
        return;
      case "/leaderboards":
        setSelectedItem(2);
        return;
      case "/signin":
        setSelectedItem(3);
        return;
      case "/logout":
        setSelectedItem(4);
        return;
      case "/signup":
        setSelectedItem(4);
        return;
      default:
        if (url.startsWith("/profile")) {
          setSelectedItem(3);
          return;
        }
        setSelectedItem(null);
        return;
    }
  }, [location.pathname]);

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
          id={1}
          selectedItem={selectedItem}
          icon="gamepad"
          text="Play Tetris"
        />
        <HeaderLink
          to="/leaderboards"
          color="yellow"
          id={2}
          selectedItem={selectedItem}
          icon="trophy"
          text="Leaderboards"
        />
        <div className="right menu">
          {props.isAuthenticated ? (
            <React.Fragment>
              <HeaderLink
                to={`/profile`}
                color="pink"
                id={3}
                selectedItem={selectedItem}
                icon="user"
                text="Profile"
              />
              <HeaderLink
                to="/logout"
                color="purple"
                id={4}
                selectedItem={selectedItem}
                icon="sign-out"
                text="Log Out"
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <HeaderLink
                to="/signin"
                color="pink"
                id={3}
                selectedItem={selectedItem}
                icon="sign-in"
                text="Sign In"
              />
              <HeaderLink
                to="/signup"
                color="purple"
                id={4}
                selectedItem={selectedItem}
                icon="address card outline"
                text="Sign Up"
              />
            </React.Fragment>
          )}
        </div>
      </NavBar>
    </NavBar>
  );
};

export default Header;
