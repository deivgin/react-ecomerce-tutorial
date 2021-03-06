import React from "react";

import "./sign-in.styles.scss";

import FormImput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value})
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormImput
            name="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
            required
          />
          <FormImput
            name="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit" value="submit form">Sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
