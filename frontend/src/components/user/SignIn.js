import React from "react";
import { connect } from "react-redux";
import { authSignIn } from "../../redux/authentication/authActions";
import ContentContainer from "../ContentContainer";
import FormContainer from "./FormContainer";
import styled from "styled-components";

const FormTitle = styled.h2`
    color: "#ff59b7
`;

class SignIn extends React.Component {
  state = {
    selectedFormItem: null,
    username: "",
    password: "",
  };

  onInputChange = (e, input) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    return (
      <FormContainer>
        <div
          onClick={}
          className="ui inverted segment"
          style={{
            backgroundColor: "#050505",
            borderColor: "#ff59b7",
            borderStyle: "solid",
          }}
        >
          <h2 class="ui header">Sign In</h2>
          <form className="ui inverted form">
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                value={this.state.username}
                name="username"
                onChange={(e) => this.onInputChange(e, "username")}
                placeholder="Username"
                style={{ borderColor: "pink", borderWidth: "2px" }}
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => this.onInputChange(e, "password")}
                placeholder="Password"
                value={this.state.password}
              />
            </div>
            <button className="ui button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </FormContainer>
    );
  }
}

export default connect(null)(SignIn);
