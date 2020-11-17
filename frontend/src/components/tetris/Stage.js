import React from "react";
import { connect } from "react-redux";
import { startGame } from "../../redux/tetris/game/gameActions";
import styled from "styled-components";
import Cell from "./Cell";
import { Loader } from "semantic-ui-react";

const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(21vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  border: 1px solid;
  border-bottom-color: #d659ff;

  border-radius: 3px;
  width: 100%;
  max-width: 21vw;

  background: #111;
`;

class Stage extends React.Component {
  renderStage = () => {
    if (this.props.stage) {
      return this.props.stage.map((row) =>
        row.map((cell, x) => (
          <Cell key={x} type={cell[0]} pieces={this.props.pieces} />
        ))
      );
    } else {
      return <div> Loading </div>;
    }
  };

  render() {
    if (this.props.stage) {
      return (
        <StyledStage
          width={this.props.stage[0].length}
          height={this.props.stage.length}
        >
          {this.renderStage()}
        </StyledStage>
      );
    } else {
      return <Loader />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    stage: state.game.stage,
    pieces: state.game.pieces,
  };
};

export default connect(mapStateToProps, { startGame })(Stage);
