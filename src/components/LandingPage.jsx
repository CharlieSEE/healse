import React from "react";
import "../css/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="roundedBackground">
        <h1 className="title">The only app you need</h1>
        {/* TODO Some anim */}
        <p className="description">
          Join us now and start tracking your body metrics
        </p>
        <div className="detailSection">
          <div className="detailSection-element">
            icon <br />
            open source
          </div>
          <div className="detailSection-element">
            icon <br />
            free
          </div>
        </div>
      </div>
      <button className="buttonSignUp">Sign up</button>
      <button className="buttonLogin">Login</button>
    </div>
  );
};

export default LandingPage;
