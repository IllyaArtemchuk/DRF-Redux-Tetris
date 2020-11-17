import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { submitScore } from "../../redux/leaderboards/leaderboardActions";
import { StyledButton, SideBarCard, SignInLink } from "../StyledComponents";

const SubmitConfirm = styled(SideBarCard)``;

class SubmitButton extends React.Component {
  state = {
    submitted: false,
  };
  handleSubmit = () => {
    this.setState({ submitted: true });
    this.props.submitScore(this.props.score);
  };

  showButtonText = () => {
    if (this.state.submitted && this.props.leaderboard.error) {
      return "Error";
    }

    return "Submit";
  };

  render() {
    if (!this.props.user) {
      return (
        <div>
          <SideBarCard size={this.props.size}>
            <SignInLink>Sign In</SignInLink> To Be Able To Submit Scores
          </SideBarCard>
          <StyledButton color="grey" disabled size={this.props.size}>
            Submit
          </StyledButton>
        </div>
      );
    }
    if (
      this.state.submitted &&
      !this.props.leaderboard.error &&
      !this.props.leaderboard.loading
    ) {
      return (
        <SideBarCard size={this.props.size}>
          Your Score has been successfully submitted!
        </SideBarCard>
      );
    }
    return (
      <div>
        {this.props.score !== 0 ? (
          <StyledButton
            color="pink"
            size={this.props.size}
            loading={this.props.leaderboard.loading}
            onClick={() => this.handleSubmit()}
            disabled={this.state.submitted}
          >
            {this.showButtonText()}
          </StyledButton>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    leaderboard: state.leaderboard,
    score: state.game.score,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitScore: (score) => dispatch(submitScore(score)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton);
