import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { signUp } from "../reducks/user/operations";

const SignUp = () => {
  const dispatch = useDispatch();

  const [user_name, setUserName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputUserName = (event) => {
    setUserName(event.target.value);
  };

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);
  };

  const signUpButton = () => {
    dispatch(signUp(user_name, email, password));
    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div class="form">
      <h2>SIGN UP</h2>
      <div class="form-group">
        <label>Name</label>
        <input type="email" class="form-control" onChange={inputUserName} placeholder="Enter User Name" value={user_name} required />
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" onChange={inputEmail} placeholder="Enter email" value={email} required />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" onChange={inputPassword} placeholder="Password" value={password} required />
      </div>
      <button type="submit" class="btn btn-primary" onClick={signUpButton}>
        Sign Up
      </button>
      <br />
      <a href="/signin">Have an Account? Sign In</a>
    </div>
  );
};

export default SignUp;
