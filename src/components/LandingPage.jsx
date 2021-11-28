import React from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as Logo } from "../logo.svg";
import "../css/LandingPage.css";
const LandingPage = () => {
  return (
    <div className="landingPage">
      <section>
        <h1 className="title">The only app you need</h1>
        {/* TODO Some anim */}
        <div className="infoWrapper">
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
        <div class="waveDivider">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section className="signingSection">
        <Link to="login">
          <button className="buttonLogin">Login</button>
        </Link>
        <Link to="signup">
          <button className="buttonSignUp">Sign up</button>
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
