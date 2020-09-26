import React, { PureComponent } from "react";

class LogIn extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: [],
    };
  }

  onSubmitForm = (event) => {};
  handelEmailChange = (event) => {};
  onClickLogin = (event) => {};
  onClickResetPassword = (event) => {};
  onClickSignUp = (event) => {};
  render() {
    return (
      <div className="container">
        <h2>Login</h2>
        <div className="row">
          <div className="col s3" />
          <form
            className="col s6"
            onSubmit={(event) => this.onSubmitForm(event)}
          >
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="email"
                  value={this.state.email}
                  onChange={(e) => this.handelEmailChange(e)}
                  id="email"
                  type="email"
                  className="validate"
                />
                <label htmlFor="email">Email</label>
                <span
                  className="helper-text"
                  data-error="Email is not valid."
                  data-success="Good email."
                />
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  name="password"
                  value={this.state.password}
                  onChange={(e) => this.handelPasswordChange(e)}
                  id="password"
                  type="password"
                  className="validate"
                />
                <label htmlFor="password">Password</label>
                <span
                  className="helper-text"
                  data-error="Password is not valid."
                  data-success="Good password."
                />
              </div>
            </div>

            <div className="row">
              <div className="col s4">
                <button
                  className="waves-effect waves-light btn pink accent-3"
                  type="submit"
                  name="action"
                  onClick={this.onSubmitForm}
                >
                  Login
                </button>
              </div>
              <div className="col s4">
                <button
                  className="waves-effect waves-light btn pink accent-3"
                  type="submit"
                  name="action"
                  onClick={(e) => this.onClickResetPassword(e)}
                >
                  Forgot your password
                </button>
              </div>
              <div className="col s4">
                <button
                  className="waves-effect waves-light btn pink accent-3"
                  type="submit"
                  name="action"
                  onClick={(e) => this.onClickSignUp(e)}
                >
                  Sign UP
                </button>
              </div>
            </div>
          </form>
          <div className="col s3" />
        </div>
      </div>
    );
  }
}

export default LogIn;
