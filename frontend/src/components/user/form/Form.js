import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FormContainer from "./FormContainer";
import styled from "styled-components";
import ClickOutHandler from "react-onclickout";
import FormField from "./FormField";
import ErrorMessage from "../../ErrorMessage";
import {
  Segment,
  Header,
  Form,
  Message,
  Button,
  Icon,
} from "semantic-ui-react";

const SignUpRedirect = styled(Message)`
  &&& {
    background-color: #050505;
    border-style: solid;
    color: white;
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

const StyledSegment = styled(Segment)`
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
          <span>
            New User?{" "}
            <LinkTag to="/signup" color="purple">
              Sign Up Here
            </LinkTag>{" "}
            instead.
          </span>
        );
      case "Sign Up":
        return (
          <span>
            Already Have An Account?{" "}
            <LinkTag to="/signin" color="pink">
              Sign In Here
            </LinkTag>
          </span>
        );
      default:
        return "error";
    }
  };

  showErrorMessage = () => {
    if (this.props.authError) {
      if (
        this.props.authError.message === "Request failed with status code 400"
      ) {
        return <ErrorMessage errors={["Invalid Username or Password"]} />;
      } else {
        <div className="ui   purple message">An Error Occured.</div>;
      }
    }
  };

  render() {
    return (
      <FormContainer>
        {this.showErrorMessage()}
        <StyledSegment color={this.props.color}>
          <Header textAlign="center" as="h1" inverted>
            {this.props.title}
          </Header>
          <ClickOutHandler onClickOut={this.onFormClickOut}>
            <Form inverted onSubmit={this.props.handleFormSubmit}>
              {this.generateFields(this.props.fields)}
              <Button color={this.props.color} type="submit" fluid>
                {this.props.submitText}
              </Button>
            </Form>
          </ClickOutHandler>
        </StyledSegment>
        <SignUpRedirect attached="bottom" color={this.props.color}>
          <Icon name="help" />
          {this.generateRedirectText()}
        </SignUpRedirect>
      </FormContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.error,
  };
};

export default connect(mapStateToProps)(StandardForm);
