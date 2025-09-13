import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import React from "react";

/**
 * RedirectAuth component
 *
 * Used on login and signup pages to redirect authenticated users.
 * If the user is logged in, redirects to the previous page or home.
 * If not logged in, renders the provided children (login/signup form).
 *
 * @component
 * @param {Object} props - Component Props
 * @param {React.ReactNode} props.children - Elements to render if not authenticated
 * @returns {React.ReactNode} Redirects or renders children based on authentication state
 */
const RedirectAuth = ({ children }) => {
  // Access authentication state from context
  const { isLoggedIn, isLoading, loginError } = useAuth();

  const location = useLocation();

  const from = location?.state?.from || "/";

  //   1. If we are fetching the data shows the loading
  // if (!loginError && isLoading) return <Spinner />;

  // Redirect if logged in, otherwise render children
  return isLoggedIn ? <Navigate to={from} replace /> : children;
};

export default RedirectAuth;
