import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import history from "../../history.js";
import styled from "styled-components";

const StyledCard = styled(Card)`
  &&& {
    background-color: #050505;
    font-family: PixelFont;
    border-radius: 0px;
    border-width: 1px;
    border-style: solid;
    border-color: red !important;
    color: white !important;
    width: 11vw;
    height: 5vw;
    min-height: ${(props) => (props.size === "large" ? "120px" : "120px")};
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
  }
`;

const CardHeader = styled.div`
  text-align: center;
  font-size: calc(7px + 0.7vw);
  white-space: nowrap;
  color: red;
`;

const CardDescription = styled.div`
  margin-top: 0.5vw;
  font-size: calc(5px + 0.5vw);
  color: white;
  text-align: center;
`;

const GameOver = (props) => {
  const [count, setCount] = useState(6);
  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    if (count === 0) {
      clearInterval(interval);
      history.push("/results");
    }
    return () => clearInterval(interval);
  }, [count]);

  return (
    <StyledCard
      size={props.size}
      header={<CardHeader>Game Over</CardHeader>}
      description={
        <CardDescription>{`Redirecting to Results in ${count} seconds`}</CardDescription>
      }
    />
  );
};

export default GameOver;
