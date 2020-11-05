import React from "react";
import { connect } from "react-redux";
import { authSignIn } from "../../redux/authentication/authActions";
import Form from "./form/Form";

class SignIn extends React.Component {
  state = {
    username: "",
    password: "",
    usernameTouched: false,
    passwordTouched: false,
  };

  onInputChange = (e, input) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  setTouched = (touchState) => {
    this.setState({
      [touchState]: true,
    });
  };

  validation = (value, field) => {
    let touchedField = `${field}Touched`;
    if (this.state[touchedField]) {
      if (value.length === 0) {
        return "Field cant be blank";
      }
      if (value.length < 8 && field === "password") {
        return "Password is at least 8 characters long";
      }
    }
    return null;
  };

  fields = () => [
    {
      name: "username",
      value: this.state.username,
      onValueChange: this.onInputChange,
      placeholder: "Username",
      type: "text",
      touched: this.state.usernameTouched,
      setTouched: () => this.setTouched("usernameTouched"),
      validation: () => this.validation(this.state.username, "username"),
    },
    {
      name: "password",
      value: this.state.password,
      onValueChange: this.onInputChange,
      placeholder: "Password",
      type: "password",
      touched: this.state.passwordTouched,
      setTouched: () => this.setTouched("passwordTouched"),
      validation: () => this.validation(this.state.password, "password"),
    },
  ];

  handleSignIn = (e, username, password) => {
    e.preventDefault();
    this.setState({
      usernameTouched: true,
      passwordTouched: true,
    });
    this.props.authSignIn(username, password);
  };

  render() {
    return (
      <Form
        title="Sign In"
        handleFormSubmit={(e) =>
          this.handleSignIn(e, this.state.username, this.state.password)
        }
        fields={this.fields()}
        color="pink"
        submitText="Sign In"
      />
    );
  }
}

export default connect(null, { authSignIn })(SignIn);
