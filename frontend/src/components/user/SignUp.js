import React from "react";
import { connect } from "react-redux";
import { authSignup } from "../../redux/authentication/authActions";
import Form from "./form/Form";

class SignIn extends React.Component {
  state = {
    username: "",
    email: "",
    password1: "",
    password2: "",
  };

  onInputChange = (e, input) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  fields = () => [
    {
      name: "username",
      value: this.state.username,
      onValueChange: this.onInputChange,
      placeholder: "Username",
      type: "text",
      color: "purple",
    },
    {
      name: "email",
      value: this.state.email,
      onValueChange: this.onInputChange,
      placeholder: "Email",
      type: "email",
      color: "purple",
      extraInformation: "Optional",
    },
    {
      name: "password1",
      value: this.state.password1,
      onValueChange: this.onInputChange,
      placeholder: "Password",
      type: "password",
      color: "purple",
      extraInformation: "Password must be at least 8 characters",
    },
    {
      name: "password2",
      value: this.state.password2,
      onValueChange: this.onInputChange,
      placeholder: "Re-enter password",
      type: "password",
      color: "purple",
    },
  ];

  handleSignUp = (e, username, password1, password2, email) => {
    e.preventDefault();
    this.props.authSignup(username, password1, password2, email);
  };

  render() {
    return (
      <Form
        title="Sign Up"
        handleFormSubmit={(e) =>
          this.handleSignUp(
            e,
            this.state.username,
            this.state.password1,
            this.state.password2,
            this.state.email
          )
        }
        fields={this.fields()}
        color="purple"
        submitText="Sign Up"
      />
    );
  }
}

export default connect(null, { authSignup })(SignIn);
