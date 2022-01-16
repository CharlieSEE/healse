import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
// Firebase imports
import { initializeApp } from "firebase/app";

import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components//Routes/PrivateRoute";

// Page imports
import LandingPage from "./components/Pages/LandingPage/LandingPage";
import ErrorPage from "./components//Pages/ErrorPage/ErrorPage";
import SignUpPage from "./components/Pages/SignUpPage/SignUpPage";
import LogInPage from "./components/Pages/LoginPage/LogInPage";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import "./App.css";

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
