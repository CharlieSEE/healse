import React from 'react';
import "../css/LogInPage.css";

const LogInPage = () => {
  return (
    <div className="logInPage">
      <h1 className="logInTitle">
        Log into your
        <p>
          <div className="blueText"> Healse </div>
          Account
        </p>
      </h1>

      <form className="logInForm">
        <input type="email" className="logInInputField" placeholder="Email" />
        <input type="password" className="logInInputField" placeholder="Password" />
        <input type="submit" value="Log in" />
      </form>
    </div>
  )
}

export default LogInPage 
