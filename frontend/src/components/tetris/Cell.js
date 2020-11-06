import React from "react";
import styled from "styled-components";

const StyledCell = styled.div`
  &&& {
    width: auto;
    background: rgba(${(props) => props.color}, 0.9);
    border: ${(props) => (props.type === 0 ? "0px solid" : "4px solid")};
    border-bottom-color: rgba(${(props) => props.color}, 0.1);
    border-right-color: rgba(${(props) => props.color}, 1);
    border-top-color: rgba(${(props) => props.color}, 1);
    border-left-color: rgba(${(props) => props.color}, 0.3);
    background-clip: padding-box;
  }
`;

const Cell = ({ type, pieces }) => (
  <StyledCell type={type} color={pieces[type].color} />
);

export default React.memo(Cell);
