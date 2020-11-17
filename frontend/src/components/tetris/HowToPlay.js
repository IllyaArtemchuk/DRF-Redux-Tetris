import React from "react";
import { Image } from "semantic-ui-react";
import styled from "styled-components";
import { SideBarCard } from "../StyledComponents";
import { ReactSVG } from "react-svg";

const Credits = styled.div`
  font-size: calc(3px + 0.2vw);
  color: white;
  a {
    color: hotpink;
  }
`;

const SVG = styled(ReactSVG)`
  svg {
    fill: white;
    height: 120px;
    width: 190px;
  }
`;

const Obj = styled.object`
  svg {
    fill: white;
    height: 120px;
    width: 190px;
  }
`;

const HowToPlay = () => {
  return (
    <SideBarCard>
      <div style={{ width: "200px", height: "200px" }}>
        <SVG src={require("../../static/img/keys/left.svg")} />
      </div>

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
    </SideBarCard>
  );
};

export default HowToPlay;
