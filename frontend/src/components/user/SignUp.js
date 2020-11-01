import React from "react";
import { connect } from "react-redux";
import { authSignup } from "../../redux/authentication/authActions";
import Form from "./Form";

class SignIn extends React.Component {
  state = {
    username: "",
    email: "",
    password1: "",
    password2: "",
  };

  componentDidUpdate(prevState) {
    if (this.state !== prevState) {
      console.log(this.state);
    }
  }

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

  handleSignUp = (username, email, password1, password2) => {
    this.authSignup();
  };

  render() {
    return (
      <Form
        title="Sign Up"
        authSignIn={() =>
          this.handleSignIn(this.state.username, this.state.password)
        }
        fields={this.fields()}
        color="purple"
      />
    );
  }
}

export default connect(null, { authSignup })(SignIn);
