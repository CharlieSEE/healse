import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/FirebaseContext";

const ProtectedRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext);
  let location = useLocation();

  if (auth) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
