import React from "react";
import { connect } from "react-redux";
import { authSignIn } from "../../redux/authentication/authActions";
import Form from "./form/Form";

class SignIn extends React.Component {
  state = {
    username: "",
    password: "",
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
      color: "pink",
    },
    {
      name: "password",
      value: this.state.password,
      onValueChange: this.onInputChange,
      placeholder: "Password",
      type: "password",
      color: "pink",
    },
  ];

  handleSignIn = (e, username, password) => {
    e.preventDefault();
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
