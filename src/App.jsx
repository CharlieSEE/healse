import { Routes, Route, BrowserRouter } from "react-router-dom";
// Firebase imports
import { initializeApp } from "firebase/app";

import Layout from "./components/Layout/Layout";
import ProtectedRoute from "./components//Routes/ProtectedRoute";
import PublicRoute from "./components//Routes/PublicRoute";

import { AuthContextProvider } from "./components/Context/FirebaseContext";

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
      <AuthContextProvider>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <PublicRoute>
                    <LandingPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <LogInPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/signup"
                element={
                  <PublicRoute>
                    <SignUpPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </AuthContextProvider>
    </div>
  );
}

export default App;
