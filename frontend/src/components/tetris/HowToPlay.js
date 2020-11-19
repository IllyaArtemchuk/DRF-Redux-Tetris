import React from "react";
import { Grid, Card, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";

const Credits = styled.div`
  font-size: calc(3px + 0.2vw);
  color: white;
  a {
    color: hotpink;
  }
`;

export const SideBarCard = styled(Card)`
  &&& {
    font-family: PixelFont;
    width: 20vw;
    height: 15vw;
    min-width: 190px;
    min-height: 310px;
    color: white;
    text-align: center;
    margin-top: 0px;
    padding-top: calc(4px + 0.4vw);
    font-size: calc(3px + 0.4vw);
    background-color: #050505;
    border-radius: 0px;
  }
`;

const SVG = styled(ReactSVG)`
  svg {
    width: calc(4px+0.4vw);
    height: calc(4px+0.4vw);
    margin-right: calc(5px + 0.1vw);
  }
`;

const Text = styled.span`
  color: white;
  font-size: calc(10px + 0.3vw);
  margin-top: -5px;
  white-space: nowrap;
`;

const HowToPlay = () => {
  return (
    <SideBarCard>
      <Grid>
        <Grid.Row>
          <Grid.Column />
          <Text>How To play</Text>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column />
          <SVG src={require("../../static/img/keys/left.svg")} />
          <SVG src={require("../../static/img/keys/right.svg")} />
          <SVG src={require("../../static/img/keys/down.svg")} />
          <Text>Move</Text>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column />
          <SVG src={require("../../static/img/keys/up.svg")} />
          <SVG src={require("../../static/img/keys/q.svg")} />
          <SVG src={require("../../static/img/keys/e.svg")} />
          <Text>Rotate</Text>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column />
          <SVG src={require("../../static/img/keys/v.svg")} />
          <Text>Hold</Text>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column />
          <SVG src={require("../../static/img/keys/space.svg")} />
          <Text>Hard Drop</Text>
        </Grid.Row>
        {/* <SVG src={require("../../static/img/keys/up.svg")} />
        <SVG src={require("../../static/img/keys/down.svg")} />
        <SVG src={require("../../static/img/keys/q.svg")} />
        <SVG src={require("../../static/img/keys/e.svg")} />
        <SVG src={require("../../static/img/keys/v.svg")} /> */}
        <Grid.Row>
          <Grid.Column />
          <Credits>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              {" "}
              www.flaticon.com
            </a>
          </Credits>
        </Grid.Row>
      </Grid>
    </SideBarCard>
  );
};

export default HowToPlay;
