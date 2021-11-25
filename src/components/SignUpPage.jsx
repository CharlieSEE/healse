import React from 'react'
import "../css/SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signUpPage">
      <h1 className="title">
        Create your Healse Account
      </h1>
      <form>
        <input type="email" className="inputField" placeholder="Email" />
        <input type="text" className="inputField" placeholder="Name" />
        <input type="password" className="inputField" placeholder="Password" />
        <input type="password" className="inputField confirmationField" placeholder="Confirm" />
        <div className="confirmationInfo">
          Use 8 or more characters with a mix of letters, numbers & symbols
        </div>
        <button className="btn">Sign up</button>
      </form>
    </div>
  )
}

export default SignUpPage
