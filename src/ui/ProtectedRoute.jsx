/**
 * ProtectedRoute component for route protection in React Router.
 *
 * This component checks if a user is authenticated before rendering its children.
 * If the user is loading, it shows a loading message.
 * If the user is not authenticated, it redirects to the login page.
 *
 * Usage:
 *   <ProtectedRoute>
 *     <YourProtectedComponent />
 *   </ProtectedRoute>
 */

import { Link } from "react-router-dom";
import useCurrentUser from "../hooks/useCurrentUser";
import { Spinner } from "./Spinners";

const ProtectedRoute = ({ children }) => {
  // load authenticated user
  const { user, isLoading } = useCurrentUser();
  // 2. show a spinner
  if (isLoading) return <Spinner />;
  // if there is no authenticated user, redirect to the login page
  if (!user) return <Link to="/">Restricted Page Login first</Link>;

  // if the user, render the app.
  return children;
};

export default ProtectedRoute;
