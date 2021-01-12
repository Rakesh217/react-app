import React, { useState, useEffect } from "react";
import { addUser } from "../Redux/Actions/Index";
import { connect } from "react-redux";

function Registration(props) {
  const [State, setState] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
  });

  let handleChange = (e) => {
    e.preventDefault();
    setState({ ...State, [e.target.name]: e.target.value });
  };

  let handleClick = (e) => {
    e.preventDefault();
    props.dispatch(addUser(State));
    console.log(State);
  };

  useEffect(() => {
    console.log("Use Effect", props.result.message);
  }, [props.result]);
  return (
    <div>
      <form>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            onChange={handleChange}
          />
        </label>
        <label>
          Email ID:
          <input
            type="email"
            name="emailId"
            placeholder="Enter email id"
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
        </label>
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

const mapSetStateToProps = (state) => {
  return {
    result: state.AddingUser.result,
  };
};

export default connect(mapSetStateToProps)(Registration);
