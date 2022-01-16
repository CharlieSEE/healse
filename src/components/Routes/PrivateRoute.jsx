import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getAuth } from "firebase/auth";

// function PrivateRoute({ comp }) {
//   const auth = getAuth();
//   const user = auth.currentUser;
//   return user ? comp : <Redirect to="/login" />;
// }

function PrivateRoute({ children, ...rest }) {
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
