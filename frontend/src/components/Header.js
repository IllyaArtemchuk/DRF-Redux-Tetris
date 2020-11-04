import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import HeaderLink from "./HeaderLink";
import styled from "styled-components";
import Title from "./Title";
import { Menu, Container } from "semantic-ui-react";

const HeaderTitle = styled.div`
  font-family: "Monda", sans-serif;
`;

const NavBar = styled(Menu)`
  &&& {
    background-color: #050505;
  }
`;

const LogOut = styled.a`
  &&& {
    font-family: "Trispace", sans-serif;
  }
`;

const BlackBar = styled.div`
  width: 100%;
  background-color: #050505;
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
    <BlackBar>
      <Container>
        <NavBar inverted size="massive">
          <Link to="/">
            <Menu.Item>
              <HeaderTitle>
                REDUX- <Title />
              </HeaderTitle>
            </Menu.Item>
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
          <Menu.Menu position="right">
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
                <LogOut className="purple item" onClick={props.authLogOut}>
                  <i className="sign-out icon" style={{ color: "#d659ff" }} />
                  Log Out
                </LogOut>
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
          </Menu.Menu>
        </NavBar>
      </Container>
    </BlackBar>
  );
};

export default Header;
