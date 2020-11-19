import styled from "styled-components";
import { Button, Card, Loader } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const StyledButton = styled(Button)`
  &&& {
    font-family: PixelFont;
    font-size: 1.3vw;
    margin-top: 1vw;
    width: 11vw;
    border-radius: 0px;
    min-width: ${(props) => {
      switch (props.size) {
        case "large":
          return "170px";
        case "medium":
          return "140px";
        case "small":
          return "110px";
      }
    }}!important;
    min-height: ${(props) => {
      switch (props.size) {
        case "large":
          return "30px";
        case "medium":
          return "30px";
        case "small":
          return "20px";
      }
    }};
  }
`;

export const SideBarCard = styled(Card)`
  &&& {
    font-family: PixelFont;
    width: 11vw;
    height: 3vw;
    color: white;
    text-align: center;
    padding-top: 0.5vw;
    padding-left: 0.3vw;
    padding-right: 0.3vw;
    margin-top: 0.9vw;
    font-size: calc(3px + 0.4vw);
    min-height: ${(props) => (props.size === "large" ? "80px" : "40px")};
    min-width: ${(props) => {
      switch (props.size) {
        case "large":
          return "170px";
        case "medium":
          return "140px";
        case "small":
          return "110px";
      }
    }};
    background-color: #050505;
    border-radius: 0px;
  }
`;

export const SignInLink = styled(Link)`
  color: #e3009f;
  :hover {
    color: #ff00b3;
  }
`;

export const SideBarCardLarge = styled(SideBarCard)`
  min-height: 70px !important;
`;

export const SideBarCardHuge = styled(SideBarCard)`
  min-height: 200px !important;
  min-width: 100px !important;
`;
