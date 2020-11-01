import React from "react";
import { connect } from "react-redux";
import { authSignIn } from "../../redux/authentication/authActions";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ClickOutHandler from "react-onclickout";
import FormContainer from "./FormContainer";
import FormField from "./FormField";

const Header = styled.div`
  &&& {
    text-align: center;
  }
`;

const SignUpRedirect = styled.div`
  &&& {
    background-color: #050505;
    border-style: solid;
    border-width: 1px;
    border-color: #050505;
    &:hover {
      border-color: #d659ff;
    }
    transition: 0.3s;
    border-radius: 25px;
  }
`;

const Segment = styled.div`
  &&& {
    background-color: #050505;
    border-style: solid;
    border-color: black;
    border-width: 1.5px;
    transition: 0.4s;
    &:hover {
      border-color: #ff59b7;
    }
  }
  height: 300px;
`;

const LinkTag = styled(Link)`
  color: #d659ff;
  &:hover {
    color: #c71cff;
  }
`;

class SignIn extends React.Component {
  state = {
    selectedFormItem: null,
    username: "",
    password: "",
    activeInput: null,
  };

  onInputChange = (e, input) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  onActiveInputChange = (e, input) => {
    this.setState({
      activeInput: input,
    });
  };

  onFormClickOut = () => {
    this.setState({
      activeInput: null,
    });
  };

  render() {
    return (
      <FormContainer>
        <Segment
          className="ui inverted segment"
          style={{
            backgroundColor: "#050505",
          }}
        >
          <Header className="ui center alligned huge dividing header">
            Sign In
          </Header>
          <ClickOutHandler onClickOut={this.onFormClickOut}>
            <form className="ui inverted form" onSubmit={this.props.authSignIn}>
              <FormField
                name="username"
                value={this.state.username}
                onChange={this.onInputChange}
                onClick={this.onActiveInputChange}
                placeholder="username"
                activeInput={this.state.activeInput}
                type="text"
                color="pink"
              />
              <FormField
                name="password"
                value={this.state.password}
                onChange={this.onInputChange}
                onClick={this.onActiveInputChange}
                placeholder="password"
                activeInput={this.state.activeInput}
                type="password"
                color="pink"
              />
              <button className="fluid ui pink button" type="submit">
                Sign-In
              </button>
            </form>
          </ClickOutHandler>
        </Segment>

        <SignUpRedirect className="ui inverted bottom attached message">
          <i className="icon help"></i>
          New User? <LinkTag to="/signup">Sign Up Here</LinkTag> instead.
        </SignUpRedirect>
      </FormContainer>
    );
  }
}

export default connect(null, { authSignIn })(SignIn);
