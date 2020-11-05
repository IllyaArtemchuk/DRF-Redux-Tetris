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
    usernameTouched: false,
    emailTouched: false,
    password1Touched: false,
    password2Touched: false,
    error: false,
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
    var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let touchedField = `${field}Touched`;
    if (this.state[touchedField]) {
      if (field === "email" && !value.match(emailFormat) && value !== "") {
        return "Invalid Email Address!";
      }
      if (value.length === 0 && field !== "email") {
        return "Field cant be blank";
      }
      if (
        value.length < 8 &&
        (field === "password1" || field === "password2")
      ) {
        return "Password is at least 8 characters long";
      }
      if (field === "password2" && value !== this.state.password1) {
        return "Password fields do not match!";
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
      setTouched: () => this.setTouched("usernameTouched"),
      validation: () => this.validation(this.state.username, "username"),
    },
    {
      name: "email",
      value: this.state.email,
      onValueChange: this.onInputChange,
      placeholder: "Email",
      type: "email",
      setTouched: () => this.setTouched("emailTouched"),
      validation: () => this.validation(this.state.email, "email"),
      extraInformation: "(Optional)",
    },
    {
      name: "password1",
      value: this.state.password1,
      onValueChange: this.onInputChange,
      placeholder: "Password",
      setTouched: () => this.setTouched("password1Touched"),
      validation: () => this.validation(this.state.password1, "password1"),
      type: "password",
    },
    {
      name: "password2",
      value: this.state.password2,
      onValueChange: this.onInputChange,
      placeholder: "Re-enter password",
      setTouched: () => this.setTouched("password2Touched"),
      validation: () => this.validation(this.state.password2, "password2"),
      type: "password",
    },
  ];

  handleSignUp = (e, username, password1, password2, email) => {
    e.preventDefault();
    this.setState({
      usernameTouched: true,
      emailTouched: true,
      password1Touched: true,
      password2Touched: true,
    });
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
