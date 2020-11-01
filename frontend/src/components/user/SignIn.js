import React from "react";
import { connect } from "react-redux";
import { authSignIn } from "../../redux/authentication/authActions";
import ContentContainer from "../ContentContainer";
import { Link } from "react-router-dom";
import FormContainer from "./FormContainer";
import styled from "styled-components";
import ClickOutHandler from "react-onclickout";

const Header = styled.div`
  &&& {
    text-align: center;
  }
`;

const Segment = styled.div`
  &&& {
    background-color: #050505;
    border-style: solid;
    border-color: black;
    transition: 0.4s;
    &:hover {
      border-color: #ff59b7;
    }
  }
  height: 300px;
`;

const Input = styled.input`
  &&& {
    border-color: ${(props) =>
      props.active ? "#ff59b7" : "#ffc9e8"}!important;
    border-style: solid !important;
    border-width: 2px !important;
    transition: 0.2s !important;
  }
`;

const SubmitButton = styled.button`
  &&& {
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
            <form className="ui inverted form">
              <div className="field">
                <label>Username</label>
                <Input
                  type="text"
                  value={this.state.username}
                  name="username"
                  onChange={(e) => this.onInputChange(e, "username")}
                  onClick={(e) => this.onActiveInputChange(e, "username")}
                  placeholder="Username"
                  active={this.state.activeInput === "username"}
                />
              </div>
              <div className="field">
                <label>Password</label>
                <Input
                  type="password"
                  name="password"
                  onChange={(e) => this.onInputChange(e, "password")}
                  placeholder="Password"
                  value={this.state.password}
                  onClick={(e) => this.onActiveInputChange(e, "password")}
                  active={this.state.activeInput === "password"}
                />
              </div>
              <SubmitButton
                className="fluid ui inverted pink button"
                type="submit"
              >
                Sign-In
              </SubmitButton>
            </form>
          </ClickOutHandler>
        </Segment>

        <div class="ui bottom attached message">
          <i class="icon help"></i>
          New User? <Link to="/signin">Sign In Here</Link> instead.
        </div>
      </FormContainer>
    );
  }
}

export default connect(null)(SignIn);
