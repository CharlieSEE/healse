import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
// Firebase imports
import { initializeApp } from "firebase/app";

// Page imports
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import ErrorPage from "./components/ErrorPage";
import SignUpPage from "./components/SignUpPage";
import LogInPage from "./components/LogInPage";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import "./css/App.css";

// Firebase init
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

initializeApp(firebaseConfig);

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
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
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
