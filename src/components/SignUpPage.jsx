import React, { useState } from "react";
import "../css/SignUpPage.css";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const validateData = (e) => {
    e.preventDefault();

    if (password.length < 7) return console.error("Password too short");
    console.log(`${email}, ${name}, ${password}`);
  };

  return (
    <div className="signUpPage">
      <h1 className="signUpTitle">
        <div>
          Create your
        </div>
        <div>
          <span className="blueText"> Healse </span>
          Account
        </div>
      </h1>
      <form className="signUpForm" onSubmit={validateData}>
        <input
          type="email"
          className="signUpInputField"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
        <input
          type="text"
          className="signUpInputField"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Name"
        />
        <input
          type="password"
          className="signUpInputField"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
        <input
          type="password"
          className="signUpInputField confirmationField"
          placeholder="Confirm"
        />
        <div className="confirmationInfo">
          Use 8 or more characters with a mix of letters, numbers & symbols
        </div>
        <input type="submit" value="Sign up" />
      </form>
    </div>
  );
};

export default SignUpPage;
