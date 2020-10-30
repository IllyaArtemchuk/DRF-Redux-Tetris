import React from "react";
import { connect } from "react-redux";
import { authSignIn } from "../../redux/authentication/authActions";
import ContentContainer from "../ContentContainer";

class SignIn extends React.Component {
  render() {
    return (
      <ContentContainer>
        <form className="ui form">
          <div className="field">
            <label>Username</label>
            <input type="text" name="first-name" placeholder="Username" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="text" name="last-name" placeholder="Password" />
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </ContentContainer>
    );
  }
}

export default connect(null)(SignIn);
