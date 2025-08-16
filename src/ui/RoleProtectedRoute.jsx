import useCurrentUser from "../hooks/useCurrentUser";
import { Navigate } from "react-router-dom";

// This protect routes for certain role
// In our case it ensure that only hosts can access this page
const RoleProtectedRoute = ({ children, role = "host" }) => {
  const { user, isLoading, isLoggedIn } = useCurrentUser();
  // 2. show a spinner
  if (isLoading) return <p>Is loading ...</p>;
  // if there is no authenticated user, redirect to the login page
  if (!isLoggedIn)
    return <Navigate to="/login" state={{ from: location.pathname }} />;

  if (user.role !== role) return <Navigate to="/unauthorized" replace />;

  // if the user, render the children.
  return children;
};

export default RoleProtectedRoute;
