import React from "react";
import "./css/App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import ErrorPage from "./components/ErrorPage";
import SignUpPage from "./components/SignUpPage";
import LogInPage from "./components/LogInPage";

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/login">
              <LogInPage />
            </Route>
            <Route path="/signup">
              <SignUpPage />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
