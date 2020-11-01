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
  color: ${(props) => (props.color === "pink" ? "#ff59b7" : "#d659ff")};
  &:hover {
    color: #c71cff;
  }
`;

const Input = styled.input`
  &&& {
    border-color: ${(props) => (props.active ? "#ff59b7" : null)}!important;
    border-style: solid !important;
    border-width: 1.5px !important;
    transition: 0.1s !important;
    height: 35px;
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
        return (
          <div>
            New User?{" "}
            <LinkTag to="/signup" color="purple">
              Sign Up Here
            </LinkTag>{" "}
            instead.
          </div>
        );
      case "Sign Up":
        return (
          <div>
            Already Have An Account?{" "}
            <LinkTag to="/signin" color="pink">
              Sign In Here
            </LinkTag>
          </div>
        );
      default:
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

        <SignUpRedirect className="ui inverted bottom attached message">
          <i className="icon help"></i>
          New User? <LinkTag to="/signup">Sign Up Here</LinkTag> instead.
        </SignUpRedirect>
      </FormContainer>
    );
  }
}

export default StandardForm;
