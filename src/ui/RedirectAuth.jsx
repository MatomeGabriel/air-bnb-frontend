import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * RedirectAuth
 *
 * Protects login and signup pages by redirecting authenticated users away.
 * If the user is logged in, they are redirected to their previous location or home.
 * If not logged in, the children (login/signup form) are rendered.
 *
 * Usage:
 *   <RedirectAuth>
 *     <LoginForm />
 *   </RedirectAuth>
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to show if not authenticated
 * @returns {React.ReactNode}
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
