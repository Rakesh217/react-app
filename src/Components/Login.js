import React, { Component } from "react";
import { validateUser } from "../Redux/Actions/Index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    emailId: "",
    password: "",
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.dispatch(validateUser(this.state));
  };

  componentDidUpdate = () => {
    if (this.props.result.message === "Validation Success")
      console.log("Component", this.props.result.message);
    if (this.props.result.message === "Wrong Password")
      console.log("Component", this.props.result.message);
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Email ID:
            <input
              type="email"
              name="emailId"
              placeholder="Enter email id"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="email"
              name="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            />
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
          <small>
            <Link to="/Register"> New User?</Link>
          </small>
        </form>
      </div>
    );
  }
}

const mapSetStateToProps = (state) => {
  return {
    result: state.Validation.result,
  };
};

export default connect(mapSetStateToProps)(Login);
