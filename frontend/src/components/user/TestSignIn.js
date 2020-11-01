import React from "react";
import { connect } from "react-redux";
import { authSignIn } from "../../redux/authentication/authActions";
import Form from "./Form";

class SignIn extends React.Component {
  state = {
    username: "",
    password: "",
  };

  componentDidUpdate(prevState) {
    if (this.state !== prevState) {
      console.log(this.state);
    }
  }

  onInputChange = (e, input) => {
    console.log(e.target.value);
    console.log(input);
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

  handleSignIn = (username, password) => {
    this.props.authSignIn(username, password);
  };

  render() {
    return (
      <Form
        title="Sign In"
        authSignIn={() =>
          this.handleSignIn(this.state.username, this.state.password)
        }
        fields={this.fields()}
        color="pink"
      />
    );
  }
}

export default connect(null, { authSignIn })(SignIn);
