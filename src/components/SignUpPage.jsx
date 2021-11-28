import React from 'react'
import "../css/SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signUpPage">
      <h1 className="signUpTitle">
        Create your Healse Account
      </h1>
      <form className="signUpForm">
        <input type="email" className="signUpInputField" placeholder="Email" />
        <input type="text" className="signUpInputField" placeholder="Name" />
        <input type="password" className="signUpInputField" placeholder="Password" />
        <input type="password" className="signUpInputField" placeholder="Confirm" />
        <div className="confirmationInfo">
          Use 8 or more characters with a mix of letters, numbers & symbols
        </div>
        <input type="submit" value="Sign in" />
      </form>
    </div>
  )
}

export default SignUpPage
