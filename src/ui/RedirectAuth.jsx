import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

/**
 * Redirects on successful login or signup or successful authentication
 * Used in login and signup pages
 * @param {*} param0
 * @returns
 */
const RedirectAuth = ({ children }) => {
  // access our auth context to check for authentication
  const { isLoggedIn, IsLoading } = useAuth();

  const location = useLocation();

  const from = location?.state?.from || "/";
  //   1. If we are fetching the data shows the loading
  if (IsLoading) return <p>Loading...</p>;

  return isLoggedIn ? <Navigate to={from} replace /> : children;
};

export default RedirectAuth;
