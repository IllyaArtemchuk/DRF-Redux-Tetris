import React from "react";
import { connect } from "react-redux";
import { authSignIn } from "../../redux/authentication/authActions";
import ContentContainer from "../ContentContainer";
import { Link } from "react-router-dom";
import FormContainer from "./FormContainer";
import styled from "styled-components";
import ClickOutHandler from "react-onclickout";
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
      border-color: ${(props) =>
        props.color === "pink" ? "#d659ff" : "#ff59b7"};
    }
    transition: 0.1s;
    border-radius: 25px;
  }
`;

const Segment = styled.div`
  &&& {
    background-color: #050505;
    border-style: solid;
    border-color: black;
    border-width: 1.5px;
    transition: 0.2s;
    &:hover {
      border-color: ${(props) =>
        props.color === "pink" ? "#ff59b7" : "#d659ff"};
    }
  }
`;

const LinkTag = styled(Link)`
  color: ${(props) => (props.color === "pink" ? "#ff59b7" : "#d659ff")};
  &:hover {
    color: ${(props) => (props.color === "pink" ? " #fc0a93" : "#9400c4")};
  }
`;

class StandardForm extends React.Component {
  state = {
    selectedFormItem: null,
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

  generateFields = (data) => {
    console.log(data);
    return data.map((field, index) => (
      <FormField
        key={index}
        name={field.name}
        value={field.value}
        onValueChange={field.onValueChange}
        onClick={this.onActiveInputChange}
        placeholder={field.placeholder}
        activeInput={this.state.activeInput}
        type={field.type}
        color={field.color}
      />
    ));
  };

  generateRedirectText = () => {
    switch (this.props.title) {
      case "Sign In":
        console.log("SIGN IN TRIGGERD");
        return (
          <span>
            New User?{" "}
            <LinkTag to="/signup" color="purple">
              Sign Up Here
            </LinkTag>{" "}
            instead.
          </span>
        );
      case "Sign Up":
        console.log("SIGN UP TRIGGERED");
        return (
          <span>
            Already Have An Account?{" "}
            <LinkTag to="/signin" color="pink">
              Sign In Here
            </LinkTag>
          </span>
        );
      default:
        console.log("wtf");
        return "error";
    }
  };

  render() {
    return (
      <FormContainer>
        <Segment
          className="ui inverted segment"
          style={{
            backgroundColor: "#050505",
          }}
          color={this.props.color}
        >
          <Header className="ui center alligned huge dividing header">
            {this.props.title}
          </Header>
          <ClickOutHandler onClickOut={this.onFormClickOut}>
            <form
              className="ui inverted form"
              onSubmit={this.props.handleSignIn}
            >
              {this.generateFields(this.props.fields)}
              {/* <FormField
                name="username"
                value={this.state.username}
                onChange={this.onInputChange}
                onClick={this.onActiveInputChange}
                placeholder="username"
                activeInput={this.state.activeInput}
                type="text"
                color="#ff59b7"
              />
              <FormField
                name="password"
                value={this.state.password}
                onChange={this.onInputChange}
                onClick={this.onActiveInputChange}
                placeholder="password"
                activeInput={this.state.activeInput}
                type="password"
                color="#ff59b7"
              /> */}
              <button
                className={`fluid ui ${this.props.color} button`}
                type="submit"
              >
                Sign-In
              </button>
            </form>
          </ClickOutHandler>
        </Segment>

        <SignUpRedirect
          className="ui inverted bottom attached message"
          color={this.props.color}
        >
          <i className="icon help"></i>
          {this.generateRedirectText()}
        </SignUpRedirect>
      </FormContainer>
    );
  }
}

export default StandardForm;
